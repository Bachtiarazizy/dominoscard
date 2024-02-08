"use client";

import { useDominoApp } from "./domino-action";

const DominoApp = () => {
  const { dominoCards, inputValue, inputError, handleInputChange, handleAddCard, showDoubleNumbers, sortAscending, sortDescending, removeDuplicates, flipCards, removeCardsWithTotal, resetData } = useDominoApp();

  return (
    <div className="centered-container">
      <div className="container">
        <h1 className="title">Domino Cards</h1>
        <div className="domino-container">
          {dominoCards.map((card, index) => (
            <div key={index} className="domino-card">
              <div className="domino-half">{card[0]}</div>
              <div className="domino-divider"></div>
              <div className="domino-half">{card[1]}</div>
            </div>
          ))}
        </div>
        <p className="double-numbers">Double Numbers: {showDoubleNumbers()}</p>
        <div className="input-container">
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter domino card (e.g., 1,2)" className="input" />
          <button onClick={handleAddCard} className="btn">
            Add Card
          </button>
        </div>
        {inputError && <p className="error">{inputError}</p>}
        <div className="button-container">
          <button onClick={sortAscending} className="btn">
            Sort Ascending
          </button>
          <button onClick={sortDescending} className="btn">
            Sort Descending
          </button>
          <button onClick={removeDuplicates} className="btn">
            Remove Duplicates
          </button>
          <button onClick={flipCards} className="btn">
            Flip Cards
          </button>
          <button onClick={() => removeCardsWithTotal(4)} className="btn">
            Remove Cards with Total 4
          </button>
          <button onClick={resetData} className="btn">
            Reset Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default DominoApp;
