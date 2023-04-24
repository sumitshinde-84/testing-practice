function capitalize(string) {
  string = string.trim();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalize;
