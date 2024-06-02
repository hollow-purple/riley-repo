import React, { useState } from "react";
import "./App.css";

function App() {
  // State variables to manage form input values and result calculation
  // Initialize the state variables with default values
  const [generatedAffirmation, setGeneratedAffirmation] =
    useState("Hello Handsome! <3");

  // Array of affirmations
  const affirmations = [
    "Hello Riley! You're the most handsomest husband on the whole planet <3",
    "Sabi is the luckiest girl for meeting you <3",
    "You're the best boy, Sabi's amazing boy <3",
    "If you're feeling bad right now, fear not! I'm holding your hand <3",
    "You are the bestest boy and the handsomest husband ever! <3",
    "Hihi :3",
    "Te Amo, mi bonita",
    "I love you <3",
    "Everything is okay my love <3",
    "All the kisses and cuddles for you <3",
    "You're the bestest <3",
  ];

  // Handle form submission
  function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const newAffirmation = affirmations[randomIndex];
    setGeneratedAffirmation(newAffirmation);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-container">
        <p className="styled-text">{generatedAffirmation}</p>{" "}
          {/* Input fields for player metrics */}

          <div className="button-container">
          <img src="heart.png" alt="<3" className="icon-under-button" />
            <button className="styled-button" onClick={generateAffirmation}>
              Click me hihi &lt;3
            </button>{" "}
            <img src="heart.png" alt="<3" className="icon-under-button" />
            {/* Handle form submission */}
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
