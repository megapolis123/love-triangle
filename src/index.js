/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  for (let i = 0; i < preferences.length; i++) {
    let one = preferences[i] - 1;
    let two = preferences[one] - 1;
    let tree = preferences[two] - 1;

    if (tree === i) {
      count++;
    }
  }
  return Math.floor(count / 3);
};
