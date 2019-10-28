const input = [
  [5, 3, 4], [6, 7, 8], [9, 1, 2],
  [6, 7, 2], [1, 9, 5], [3, 4, 8],
  [1, 9, 8], [3, 4, 2], [5, 6, 7],
  [8, 5, 9], [7, 6, 1], [4, 2, 3],
  [4, 2, 6], [8, 5, 3], [7, 9, 1],
  [7, 1, 3], [9, 2, 4], [8, 5, 6],
  [9, 6, 1], [5, 3, 7], [2, 8, 4],
  [2, 8, 7], [4, 1, 9], [6, 3, 5],
  [3, 4, 5], [2, 8, 6], [1, 7, 9]
]

const buildSudoku = input => {
  let finalForm = sudoku(input);

  console.log(finalForm)
}

const sudoku = (input, finalArray = []) => {

  if (input.length < 1) {
    return finalArray;
  }

  const threeArrays = input.splice(0, 3)
  let row = buildRow(threeArrays);
  finalArray.push(row);
  return sudoku(input, finalArray)
}

const buildRow = input => {
  let final = []
  for (let i = 0; i < 3; i++) {
    var row = [];
    input[i].forEach(num => row.push(num));
    final.push(row)
  }
  return final.flat();
}

buildSudoku(input)