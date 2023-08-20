import React from "react";

interface Props {
  chosenLetters: string[];
  setChosenLetters: React.Dispatch<React.SetStateAction<string[]>>;
  chosenLetter: string;
  setChosenLetter: React.Dispatch<React.SetStateAction<string>>;
}

const LettersBoard: React.FC<Props> = ({
  chosenLetters,
  setChosenLetters,
  setChosenLetter,
}: Props) => {
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const handleLetterClick = (letter: string) => {
    setChosenLetters((prevChosenLetters) => [...prevChosenLetters, letter]);
    setChosenLetter(letter);
  };

  return (
    <div>
      {alphabet.map((letter) => (
        <button
          key={letter}
          className="alphabet__button"
          onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
      <div className="chosenLetters">Guessed letters: {chosenLetters}</div>
    </div>
  );
};

export default LettersBoard;
