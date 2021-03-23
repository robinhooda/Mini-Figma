import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fontselected, setFontSelected] = useState("");
  const [fontStyleSize, setFontStyleSize] = useState(16);

  function onSelectFont(event) {
    console.log(event.target.value);
    setFontSelected(event.target.value);
  }
  function increaseFont() {
    setFontStyleSize(fontStyleSize + 8);
  }
  function decreaseFont() {
    setFontStyleSize(fontStyleSize - 8);
  }
  function isdisabled() {
    if (fontStyleSize < 16) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="App">
      <h2>Mini Figma</h2>
      <h5>One solution to visualize your content</h5>
      <div>
        <label htmlFor="fontSelection">Select Font</label>
        <section style={{ margin: "1rem" }}>
          <select
            name="cars"
            id="fontSelection"
            onChange={onSelectFont}
            style={{ padding: "0.3rem", borderRadius: "0.3rem" }}
          >
            <option value=""> </option>
            <option value="Open Sans">Open Sans</option>
            <option value="Roboto">Roboto</option>
            <option value="Roboto Mono">Roboto Mono</option>
            <option value="Poppins">Poppins</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Lobster">Lobster</option>
          </select>
        </section>
        Font Size <button onClick={increaseFont}>+</button> {fontStyleSize}px{" "}
        <button disabled={isdisabled()} onClick={decreaseFont}>
          -
        </button>
        <div
          style={{
            fontFamily: fontselected,
            fontSize: `${fontStyleSize}px`,
            border: "3px solid grey",
            padding: "1rem",
            margin: "1rem"
          }}
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in
          massa tempor nec feugiat nisl pretium. Odio morbi quis commodo odio
          aenean. Praesent semper feugiat nibh sed pulvinar proin gravida. In
          nulla posuere sollicitudin aliquam ultrices sagittis orci a. Dolor
          morbi non arcu risus quis varius quam quisque id. Metus vulputate eu
          scelerisque felis. Consectetur adipiscing elit ut aliquam purus sit
          amet luctus. Velit scelerisque in dictum non. Elementum tempus egestas
          sed sed risus. Et tortor consequat id porta nibh venenatis cras sed.
        </div>
      </div>
    </div>
  );
}
