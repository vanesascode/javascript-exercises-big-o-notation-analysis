function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index)
}

const array = [9, 2, 4, 4]

console.log(removeDuplicates(array));

