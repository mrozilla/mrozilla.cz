export default function parseInput(target) {
  if (target.type === 'checkbox') {
    return {
      [target.name]: target.checked,
    };
  }
  if (target.type === 'number') {
    return {
      [target.name]: parseInt(target.value, 10),
    };
  }
  return {
    [target.name]: target.value,
  };
}
