export

function reverseString(string) {
  const convertedString = string.split('');
  const reversedString = convertedString.reverse();
  const joinedReversedString = reversedString.join('');
  return joinedReversedString;

}
