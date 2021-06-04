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


  const shuffleArray = (arr, countWords, countLetterInWord) => {

    let filteredArray = arr.filter(item => item.length === countLetterInWord); //обрезаем оригинальный массив по нужному кол-ву символов в слове
    let array = filteredArray.slice(0, countWords); //обрезает массив до нужного значения слов за игру

    let j, temp; //шафл массива
    for (let i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }

    let newArray = array.map((elem, index) => ( //мапим к нормальному виду
      <div key={index}>{wordSeparate(elem)}</div>
    ))

    //return partOfArray(newArray, 1000);

    return newArray;
  }

  // const partOfArray = (array, timeout) => {
  //   let start = 0;
  //   let end = start + 3;

  //   let sliceArray = array.slice(start, end);

  // }

  // const countDown = () => {
  //   let index = 3;
  //   let timerId = setInterval(() => {

  //     index -= 1;
  //     if (index === 0) {
  //       clearInterval(timerId);
  //     }
  //   }, 1000);


  // }



  return <>{shuffleArray(WORDS, 10, 4)}</>
}