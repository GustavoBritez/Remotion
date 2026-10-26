const fs = require('fs');
const path = require('path');

function createWavHeader(dataLength, sampleRate = 44100, numChannels = 1, bitsPerSample = 16) {
  const buffer = Buffer.alloc(44);
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;

  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataLength, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  buffer.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataLength, 40);

  return buffer;
}

function writeWav(filename, samples, sampleRate = 44100) {
  const dataLength = samples.length * 2;
  const header = createWavHeader(dataLength, sampleRate, 1, 16);
  const data = Buffer.alloc(dataLength);

  for (let i = 0; i < samples.length; i++) {
    // Clamp to -1 .. 1
    const s = Math.max(-1, Math.min(1, samples[i]));
    const intSample = s < 0 ? s * 32768 : s * 32767;
    data.writeInt16LE(Math.round(intSample), i * 2);
  }

  const outDir = path.dirname(filename);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(filename, Buffer.concat([header, data]));
  console.log(`Generated: ${filename} (${(samples.length / sampleRate).toFixed(2)}s)`);
}

const sampleRate = 44100;

// 1. Pop sound (60ms)
function generatePop() {
  const duration = 0.08;
  const numSamples = Math.floor(sampleRate * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env = Math.exp(-t * 55);
    // Pitch drops from 650Hz to 180Hz
    const freq = 180 + 470 * Math.exp(-t * 60);
    const wave = Math.sin(2 * Math.PI * freq * t);
    samples[i] = wave * env * 0.75;
  }
  return samples;
}

// 2. Click sound (tactile UI tap / QR click, 35ms)
function generateClick() {
  const duration = 0.04;
  const numSamples = Math.floor(sampleRate * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env = Math.exp(-t * 120);
    const snap = (Math.random() * 2 - 1) * Math.exp(-t * 300) * 0.4;
    const tone = Math.sin(2 * Math.PI * 1800 * t) * 0.6;
    samples[i] = (tone + snap) * env * 0.7;
  }
  return samples;
}

// 3. Slide / Whoosh sound (150ms)
function generateSlide() {
  const duration = 0.18;
  const numSamples = Math.floor(sampleRate * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env = Math.sin((t / duration) * Math.PI); // Smooth rise and fall
    const noise = Math.random() * 2 - 1;
    const tone = Math.sin(2 * Math.PI * (250 + 400 * (t / duration)) * t);
    samples[i] = (noise * 0.4 + tone * 0.6) * env * 0.4;
  }
  return samples;
}

// 4. Cash Register / Ding sound (Bell chord)
function generateDing() {
  const duration = 1.2;
  const numSamples = Math.floor(sampleRate * duration);
  const samples = new Float32Array(numSamples);

  // Frequencies: E5 (659Hz), B5 (987Hz), E6 (1318Hz)
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env = Math.exp(-t * 3.5);
    const w1 = Math.sin(2 * Math.PI * 659.25 * t);
    const w2 = Math.sin(2 * Math.PI * 987.77 * t) * 0.6;
    const w3 = Math.sin(2 * Math.PI * 1318.51 * t) * 0.4;
    const w4 = Math.sin(2 * Math.PI * 2637.02 * t) * 0.2 * Math.exp(-t * 8); // Chime sparkle
    samples[i] = (w1 + w2 + w3 + w4) * env * 0.45;
  }
  return samples;
}

// 5. Lo-Fi Background Music Track (~55 seconds)
// Warm Rhodes chords + subtle chill lo-fi beat
function generateLofiMusic() {
  const duration = 54.0;
  const numSamples = Math.floor(sampleRate * duration);
  const samples = new Float32Array(numSamples);

  const bpm = 75;
  const beatDuration = 60 / bpm; // ~0.8s per beat
  const barDuration = beatDuration * 4; // ~3.2s per bar

  // Warm Rhodes chords (frequencies in Hz):
  // Chord 0: Fmaj7 (F3: 174.6, A3: 220, C4: 261.6, E4: 329.6)
  // Chord 1: Em7 (E3: 164.8, G3: 196, B3: 246.9, D4: 293.7)
  // Chord 2: Dm9 (D3: 146.8, F3: 174.6, A3: 220, C4: 261.6, E4: 329.6)
  // Chord 3: Cmaj7 (C3: 130.8, E3: 164.8, G3: 196, B3: 246.9)
  const progression = [
    [174.6, 220.0, 261.6, 329.6],
    [164.8, 196.0, 246.9, 293.7],
    [146.8, 174.6, 220.0, 261.6, 329.6],
    [130.8, 164.8, 196.0, 246.9]
  ];

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const barIndex = Math.floor(t / barDuration) % progression.length;
    const timeInBar = t % barDuration;
    const chord = progression[barIndex];

    // Rhodes piano synthesis (soft sine + subtle harmonic + tremolo)
    const chordEnv = Math.exp(-timeInBar * 0.4) * 0.8 + 0.2;
    const tremolo = 1 + 0.15 * Math.sin(2 * Math.PI * 4.5 * t);
    let chordSignal = 0;
    for (const f of chord) {
      chordSignal += Math.sin(2 * Math.PI * f * t) * 0.25;
      chordSignal += Math.sin(2 * Math.PI * (f * 2) * t) * 0.08; // 2nd harmonic
    }
    chordSignal *= chordEnv * tremolo;

    // Sub bass (Root note, low-pass warmth)
    const rootFreq = chord[0] * 0.5; // one octave down
    const bassSignal = Math.sin(2 * Math.PI * rootFreq * t) * 0.3 * Math.min(1, Math.exp(-timeInBar * 0.5) + 0.3);

    // Lo-Fi Beat:
    // Kick on beat 1 and beat 3 (t mod beatDuration)
    const beatPos = (t % barDuration) / beatDuration;
    let drumSignal = 0;

    // Kick on beat 0 and beat 2.5
    const isKick1 = beatPos < 0.25;
    const isKick2 = beatPos >= 2.5 && beatPos < 2.75;
    if (isKick1) {
      const dt = (beatPos % 1) * beatDuration;
      const kickFreq = 120 * Math.exp(-dt * 25) + 45;
      drumSignal += Math.sin(2 * Math.PI * kickFreq * dt) * Math.exp(-dt * 15) * 0.45;
    } else if (isKick2) {
      const dt = ((beatPos - 2.5) % 1) * beatDuration;
      const kickFreq = 120 * Math.exp(-dt * 25) + 45;
      drumSignal += Math.sin(2 * Math.PI * kickFreq * dt) * Math.exp(-dt * 15) * 0.4;
    }

    // Snare / Rimshot on beat 2 and 4 (beatPos 1.0 and 3.0)
    const isSnare1 = beatPos >= 1.0 && beatPos < 1.3;
    const isSnare2 = beatPos >= 3.0 && beatPos < 3.3;
    if (isSnare1 || isSnare2) {
      const dt = ((beatPos % 2) - 1) * beatDuration;
      const snareNoise = (Math.random() * 2 - 1) * Math.exp(-dt * 22) * 0.25;
      const snareTone = Math.sin(2 * Math.PI * 220 * dt) * Math.exp(-dt * 30) * 0.2;
      drumSignal += (snareNoise + snareTone);
    }

    // Soft Hi-Hat on every 8th note
    const eighthPos = (t % (beatDuration / 2)) / (beatDuration / 2);
    if (eighthPos < 0.2) {
      const dt = eighthPos * (beatDuration / 2);
      const hat = (Math.random() * 2 - 1) * Math.exp(-dt * 60) * 0.08;
      drumSignal += hat;
    }

    // Vinyl crackle / warm tape hiss
    const vinyl = (Math.random() * 2 - 1) * 0.015;

    // Master envelope for fade-in (1s) and fade-out (2s)
    let masterEnv = 1.0;
    if (t < 1.0) masterEnv = t;
    if (t > duration - 2.0) masterEnv = Math.max(0, (duration - t) / 2.0);

    samples[i] = (chordSignal * 0.4 + bassSignal * 0.35 + drumSignal * 0.35 + vinyl) * masterEnv * 0.7;
  }
  return samples;
}

const outDir = path.join(__dirname, '..', 'public', 'audio');
writeWav(path.join(outDir, 'pop.wav'), generatePop());
writeWav(path.join(outDir, 'click.wav'), generateClick());
writeWav(path.join(outDir, 'slide.wav'), generateSlide());
writeWav(path.join(outDir, 'ding.wav'), generateDing());
writeWav(path.join(outDir, 'lofi-track.wav'), generateLofiMusic());
console.log('All audio assets generated successfully in public/audio!');
