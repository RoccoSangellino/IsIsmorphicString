const isIsomorphic = (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sHashTable = {};
  const tHashTable = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!sHashTable[charS]) {
      sHashTable[charS] = charT;
    }

    if (!tHashTable[charT]) {
      tHashTable[charT] = charS;
    }

    if (sHashTable[charS] !== charT || tHashTable[charT] !== charS) {
      return false;
    }
  }

  return true;
}