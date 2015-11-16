export default function filterData(state) {
  const {raw, sex, nameLengthMax, nameLengthMin} = state;
  return raw.filter(d => {
    return (
      sex.has(d[2]) &&
      d[0].length <= nameLengthMax &&
      d[0].length >= nameLengthMin
    );
  });
}
