function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) || 1;
}

function mulberry32(seed: number) {
  let state = seed;
  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface AvatarBlob {
  top: string;
  left: string;
  size: string;
}

export function getAvatarBlobs(seed: string, count = 3): AvatarBlob[] {
  const rand = mulberry32(hashSeed(seed));
  return Array.from({ length: count }, () => ({
    top: `${Math.round(rand() * 80)}%`,
    left: `${Math.round(rand() * 80)}%`,
    size: `${Math.round(55 + rand() * 55)}px`,
  }));
}
