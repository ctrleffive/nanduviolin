export const cl = (...classes: (string | undefined | boolean)[]) => {
  return classes.filter(item => item).join(" ");
}
