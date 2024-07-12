import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./components/SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Color Generator: </label>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="colors-container">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
