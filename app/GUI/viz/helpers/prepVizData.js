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

export function prepNameLength(data) {
  const myData = [];
  const loopData = new Map([
    ['0-5', 0],
    ['6-10', 0],
    ['11-20', 0],
    ['21+', 0],
  ]);
  let lbl = '21+';

  data.map(d=> {
    const l = d[0].length;
    if (l < 6) {
      lbl = '0-5';
    } else if (l < 11) {
      lbl = '6-10';
    } else if (l < 21) {
      lbl = '11-20';
    }
    const v = loopData.get(lbl);
    loopData.set(lbl, v + 1);
  });
  loopData.forEach((v, k) => {
    myData.push({
      id: k,
      value: v,
    });
  });
  return myData;
}
