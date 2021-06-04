import {WORDS} from "../data/data"

const wordFor = WORDS[0];
export default function Game() {


  const wordSeparate = (word) => {
    let random = mathRandom(word.length);
    if(random == 0) random=+1;
    const part1 = word.slice(0, random);
    const part2 = word.slice(random);

    return `${part1} ~ ${part2}`

  }

  const mathRandom = (word) => {
    return Math.floor(Math.random() * word)
  }


    return <h1>{wordSeparate(wordFor)}</h1>
  }