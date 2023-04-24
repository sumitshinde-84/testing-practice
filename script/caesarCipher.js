function caesarCipher(str, shift) {
    const shiftedChars = str.split("").map((char) => shiftChar(char, shift));
    return shiftedChars.join("");
  }
  
  function shiftChar(char, shift) {
    const charCode = char.charCodeAt();
    
    if (charCode >= 65 && charCode <= 90) {
      return shiftUppercaseChar(char, shift);
    } else if (charCode >= 97 && charCode <= 122) {
      return shiftLowercaseChar(char, shift);
    } else {
      return char;
    }
  }
  
  function shiftUppercaseChar(char, shift) {
    const charCode = char.charCodeAt();
    const shiftedCode = ((charCode - 65 + shift) % 26) + 65;
    return String.fromCharCode(shiftedCode);
  }
  
  function shiftLowercaseChar(char, shift) {
    const charCode = char.charCodeAt();
    const shiftedCode = ((charCode - 97 + shift) % 26) + 97;
    return String.fromCharCode(shiftedCode);
  }

  export default caesarCipher