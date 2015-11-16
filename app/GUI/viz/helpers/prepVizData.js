export function prepPerLetter(data) {
  const myData = [];
  const loopData = new Map;

  data.map(d => {
    let letter = d[0].substr(0, 1).toUpperCase();
    if (!letter.match(/[A-Z]/i)) {
      letter = '-';
    }
    if (loopData.has(letter)) {
      const n = loopData.get(letter);
      loopData.set(letter, n + 1);
    } else {
      loopData.set(letter, 1);
    }
  });
  loopData.forEach((v, k) => {
    myData.push({
      id: k,
      value: v,
    });
  });
  return myData;
}
