import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("UpperCase was clicked" +text);
    let newText=text.toUpperCase();
     setText(newText);
  }
  const handleLoClick=()=>{
    console.log("LowerCase was clicked" +text);
    let newText=text.toLowerCase();
     setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text Here');
    return (<>
    <div className="container">
      <div className="mb-3">
        <h2>{props.heading}</h2>
      
      <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>

      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    
    </div>
    </div>
      <div className="container" my-3>
        <h3>Your Text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length}Minutes to read</p>
    <h3>Preview</h3>
<p>{text}</p>
      </div>
      </>
    )
    
}
