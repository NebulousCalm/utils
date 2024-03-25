const asciiCharSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '<', '>', ',', '.', '/', '?', '`', '~', "'", '"', ' '];
const numberCharSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowercaseCharSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseCharSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// randomization functions
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateRandomValue = (max, dataset) =>{
  let psw = []
  for (let i = 0; i < max; i++) {
    const randomItem = dataset[Math.floor(Math.random()*dataset.length)];
    psw.push(randomItem)
  }
  return psw.join('');
}

// dataset manip functions
const combine2arr = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
const combine2arrNoDupe = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
