function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strings.length; i++) {
    while (!strings[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
}
/*
1. Define a function named "longestCommonPrefix" that takes a parameter: "strs" (an array of strings).
2. If the "strs" array is empty, return an empty string "".
3. Assign the first string in the "strs" array to a variable named "prefix".
4. Iterate through the remaining strings in the "strs" array starting from index 1:
   While the current string does not start with the "prefix", remove the last character from the "prefix".
5. After iterating through all the strings, return the "prefix".
6. End of the "longestCommonPrefix" function.
*/
