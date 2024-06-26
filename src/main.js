//first programm
let limitN = 10;

function* fibonacci(limit) {
  let a = 0;
  let b = 1;
  let count = 0;

  while (count < limit) {
    yield a;
    [a, b] = [b, a + b];
    count++;
  }
}

let fibGenerator = fibonacci(limitN);

for (let num of fibGenerator) {
  console.log(num);
}

//second programm
const testArr = [1, [2, [3, "b"], 5], 6, [7, 8, [9, 10]]];

function* flatten(arr) {
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      yield* flatten(elem);
    } else {
      yield elem;
    }
  }
}

const flatGen = flatten(testArr);

console.log("second programm");
for (const elem of flatGen) {
  console.log(elem);
}

//third programm
async function* asyncGenerator(arrOfPromises) {
  for (const promise of arrOfPromises) {
    yield await promise;
  }
}


const createPromise = (value, delay) => new Promise(resolve => setTimeout(() => resolve(value), delay));

const arrOfPromises = [
  createPromise('Result 1', 1000),
  createPromise('Result 2', 500),
  createPromise('Result 3', 2000)
];

console.log("third programm");

//чекнуть почему не работает*
(async () => {
  const resultsGenerator = asyncGenerator(arrOfPromises);
  for await (const result of resultsGenerator) {
    console.log(result);
  }
})();