import React, { useEffect, useState } from "react";
import "./App.css";
import LettersBoard from "./components/LettersBoard";
import GuessedLetters from "./components/GuessedLetters";
import hangmanWords from "./words/words.json";

const App: React.FC = () => {
  const randomHangmanWord =
    hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

  const [chosenLetter, setChosenLetter] = useState<string>("");
  const [chosenLetters, setChosenLetters] = useState<string[]>([]);
  const [word, setWord] = useState<string>(randomHangmanWord);

  return (
    <div className="App">
      <LettersBoard
        chosenLetters={chosenLetters}
        setChosenLetters={setChosenLetters}
        chosenLetter={chosenLetter}
        setChosenLetter={setChosenLetter}
      />
      <GuessedLetters word={word} chosenLetter={chosenLetter} />
    </div>
  );
};

export default App;
