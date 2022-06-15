import "./App.css";
import { useState } from "react";
import { Vocab } from "./vocabList";
const logo = require("./flucky-logo.png");

function App() {
  const randomNum = Math.floor(Math.random() * Math.floor(Vocab.length));
  const [randomWords, setRandomWords] = useState(0);

  const randomGenerator = () => {
    return setRandomWords(randomNum);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <img
            className="header-icon"
            src={logo}
            alt="Flucky logo"
            width="25px"
            height="25px"
          />
          <p className="header-title">Flucky</p>
        </div>
        <div className="main">
          <h1 className="title">{Vocab[randomWords].FIELD1}</h1>
          <div className="abjective-holder">
            <p className="abjective">Abjective:</p>
            <p className="meaning"> {Vocab[randomWords].FIELD2}</p>
          </div>
        </div>
        <button className="button-64" onClick={randomGenerator}>
          <span class="text">Flucky</span>
        </button>
        <div className="footer">
          <p className="footer-text">
            Made with <span role="img">❤️</span> by{" "}
            <a href="https://karthikgopal.netlify.app/">
              <strong>Karthik Gopal</strong>
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
