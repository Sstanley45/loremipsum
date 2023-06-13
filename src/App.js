import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(0);

  const generateParagraphs = () => {
    let selectedParagraphs = data.slice(0, count);
    setParagraphs(selectedParagraphs);
  };

  return (
    <div className="App">
      <h1>Bored of the Lorem ipsum ?</h1>
      <div className="input-div">
        <label htmlFor="paragraphs">Enter number of paragraphs </label>
        <input
          className="input"
          type="text"
          value={count}
          onChange={(e) => { 
            if (e.target.value > 8 || e.target.value < 0) {
              alert('please input a value 0 to 8')
              return
            } else {
              setCount(e.target.value);  
            }
          } }
        />
        <div className="icon-btns-div">
          <button class="icon" onClick={() => setCount((count) => count <= 0 ? 0 : count -1)}>
            &#8722;
          </button>
          <button class="icon" onClick={() => setCount((count) => count >=8 ? 8 : count + 1)}>
            &#43;
          </button>
        </div>
      </div>
      <button className="btn" onClick={generateParagraphs}>
        Generate
      </button>
      <header className="App-header">
        <div>
          {paragraphs.map((data, i) => {
            return (
              <div className="paragraph" key={i}>
                {data}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
