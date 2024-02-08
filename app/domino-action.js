import { useState } from "react";

export const useDominoApp = () => {
  const initialData = [
    [1, 2],
    [1, 3],
    [4, 1],
    [1, 3],
    [6, 1],
    [1, 1],
  ];

  const [dominoCards, setDominoCards] = useState(initialData);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError("");
  };

  const handleAddCard = () => {
    const newCard = inputValue
      .trim()
      .split(",")
      .map((str) => parseInt(str, 10));
    if (newCard.length !== 2 || isNaN(newCard[0]) || isNaN(newCard[1])) {
      setInputError("Please enter two valid numbers separated by a comma.");
      return;
    }
    setDominoCards([...dominoCards, newCard]);
    setInputValue("");
  };

  const showDoubleNumbers = () => {
    const doubleNumbers = dominoCards.filter((card) => card[0] === card[1]);
    return doubleNumbers.length;
  };

  const sortAscending = () => {
    const sorted = dominoCards.sort((a, b) => {
      const sumA = a[0] + a[1];
      const sumB = b[0] + b[1];
      return sumA - sumB;
    });
    setDominoCards([...sorted]);
  };

  const sortDescending = () => {
    const sorted = dominoCards.sort((a, b) => {
      const sumA = a[0] + a[1];
      const sumB = b[0] + b[1];
      return sumB - sumA;
    });
    setDominoCards([...sorted]);
  };

  const removeDuplicates = () => {
    const uniqueCards = [...new Set(dominoCards.map((card) => card.join()))].map((str) => str.split(",").map(Number));
    setDominoCards([...uniqueCards]);
  };

  const flipCards = () => {
    const flipped = dominoCards.map((card) => [card[1], card[0]]);
    setDominoCards([...flipped]);
  };

  const removeCardsWithTotal = (total) => {
    const filteredCards = dominoCards.filter((card) => card[0] + card[1] !== total);
    setDominoCards([...filteredCards]);
  };

  const resetData = () => {
    setDominoCards(initialData);
  };

  return {
    dominoCards,
    inputValue,
    inputError,
    handleInputChange,
    handleAddCard,
    showDoubleNumbers,
    sortAscending,
    sortDescending,
    removeDuplicates,
    flipCards,
    removeCardsWithTotal,
    resetData,
  };
};
