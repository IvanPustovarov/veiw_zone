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


  const shuffleArray = (arr, number) => {
    let array = arr.slice(0, number); //обрезает массив до нужного значения

    let j, temp; //шафл массива
    for (let i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }

    let newArray = array.map((elem, index) => ( //мапим к норм виду
      <div key={index}>{elem}</div>
    ))

    return newArray;
  }

  return <>{shuffleArray(WORDS, 10)}</>
}