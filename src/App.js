import React, { useState, useEffect } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const checkSpelling = (inputText) => {
    const words = inputText.split(" ");
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }
    setSuggestion(""); // No suggestion if all words are correct
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    checkSpelling(inputText);
  };

  return (
    <div >
    <h1>Spell Check and Auto-Correction </h1>
      <textarea 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Type your text here..." 
        rows="5"
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
