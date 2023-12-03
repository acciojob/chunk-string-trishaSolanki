function stringChop(str, size) {
  // your code here
	if (str === null) {
    return [];
  }

  const result = [];
  let index = 0;

  while (index < str.length) {
    result.push(str.slice(index, index + size));
    index += size;
  }

  return result;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
