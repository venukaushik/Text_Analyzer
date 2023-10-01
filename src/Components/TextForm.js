import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")

  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success")

  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed", "success")

  }

  const [text, setText] = useState("");

  return (
    <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <h2 className="mb-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={{
          backgroundColor: props.mode === 'light' ? 'white' : '#242b2f', color: props.mode === 'light' ? 'black' : 'white',
          borderColor: props.mode === 'light' ? 'black' : 'white'
        }}></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert To Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
      <div className="container my-2">
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read above text.</p>
      </div>
      <h3 className="container my-2">Preview Above Analyzed Text</h3>
      <div className="container">{text.length > 0 ? text : "Nothing To Preview"}</div>
    </div >
  );
}
