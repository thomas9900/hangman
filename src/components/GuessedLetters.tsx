import React, { useState, useEffect } from "react";

interface Props {
  word: string;
  chosenLetter: string;
}

const GuessedLetters = ({ word, chosenLetter }: Props) => {
  const lettersArray = word.split("");

  const [guessedLetters, setGuessedLetters] = useState<string[]>(
    lettersArray.map(() => "_")
  );

  console.log(word, chosenLetter);

  useEffect(() => {
    const updatedGuessedLetters = lettersArray.map((letter, index) =>
      letter === chosenLetter ? chosenLetter : guessedLetters[index]
    );
    setGuessedLetters(updatedGuessedLetters);
  }, [chosenLetter]);

  return (
    <div>
      {guessedLetters.map((letter, index) => (
        <span className="letter__placement" key={index}>
          {letter}{" "}
        </span>
      ))}
    </div>
  );
};

export default GuessedLetters;
