import { WORDS } from "../data/data"

const wordFor = WORDS[0];
export default function Game() {


  const wordSeparate = (word) => {
    let random = mathRandom(word.length);
    if (random == 0) random = +1;
    const part1 = word.slice(0, random);
    const part2 = word.slice(random);

    return `${part1} ~ ${part2}`

  }

  const mathRandom = (word) => {
    return Math.floor(Math.random() * word)
  }

  const letterCount = (array, count) => {
    return array.filter(item => item.length === count);
  }

  const countWordsOfGame = (array, count) => {
    if (count > array.length) {
      throw new Error("Кол-во слов больше доступного");
    }
    return array.slice(0, count);
  }

  const shuffle = (array) => {
    let j, temp;
    for (let i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  }

  const normalizeArray = (array) => {
    return array.map((elem, index) => (
      <div key={index}>{wordSeparate(elem)}</div>
    ))
  }

  const countDown = (array, interval) => {
    let start = 0;
    let end = start + 3;
    let count = 10;
    let timerId = setInterval(() => {
      console.log("ok");
      count -= 1;
      // if (end === array.length) {
      //   clearInterval(timerId);
      // }
      if (count === 0) {
        clearInterval(timerId)
      }
    }, interval);
  }


  const arrayManipulation = (arr, countWords, countLetterInWord) => {

    let countLetterInWordArray = letterCount(arr, countLetterInWord); //обрезаем оригинальный массив по нужному кол-ву символов в слове
    let countWordsOfGameArray = countWordsOfGame(countLetterInWordArray, countWords); //обрезает массив до нужного значения слов за игру
    let shuffleArray = shuffle(countWordsOfGameArray); //перемешивает массив
    let finalArray = normalizeArray(shuffleArray); //форматируем массив

    return finalArray;
  }

  countDown(WORDS, 1000);
  return <>{arrayManipulation(WORDS, 10, 4)}</>
}