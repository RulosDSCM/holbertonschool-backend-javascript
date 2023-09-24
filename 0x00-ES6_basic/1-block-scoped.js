export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line
    let task = true;
    // eslint-disable-next-line
    let task2 = false;
  }

  return [task, task2];
}
