function reversedString(string) {
  let str = "";
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return str.trim();
}
export default reversedString;
