import React, { useState } from 'react'

export default function Textarea(props) {
    //states
    const [text,setText]=useState('');
    
/*button*/ 
   const Clickonclick= () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert("TEXT CONVERTED TO UPPERCASE","SUCCESS!");
   } 

   const Clickonclick2= () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert("TEXT CONVERTED TO LOWERCASE","SUCCESS!");
   } 


   const ClearText= () =>{
    let newText = "";
    setText(newText)
    props.showalert("TEXT CLEARED","SUCCESS!");
   } 
   


   const gmail= () =>{
    let newText = text+"@gmail.com";
    setText(newText)
    props.showalert("YOUR GMAIL HAS BEEN CREATED!","CREATED!")
   } 


   const handleCopy=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("COPIED!","YOUR TEXT HAS BEEN COPIED!")
   
   }


    /*textarea*/
    const Changeonchange = (event) =>{
        setText(event.target.value)
    }


    

/*
//buttons-dark/light mode 
const[btntext,setbtntext]=useState("Enable Dark Mode")


    //dark mode- style
   const [myStyle,setstyle]=useState({
        color: 'black',
        backgroundColor: 'white'
    })


    const Dark = () =>{
        if(myStyle.color == 'white'){
            setstyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable Dark Mode")
        }
        else{
            setstyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext("Enable Light Mode")
        }
    }*/




  return (
    <>
  <div className="form-group" style={{color: props.mode==='dark'?'white':'black'}} >
    <label htmlFor="exampleFormControlTextarea1">Start Typing...</label>
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'rgb(126 135 129)':'lightblue' , color:props.mode==='dark'?'white':'black'}} onChange={Changeonchange} id="exampleFormControlTextarea1" rows="8" ></textarea>
    
    <br/>

    <button type="button" onClick={Clickonclick} className="btn btn-info mx-2">Convert to Upper Case</button>
    <button type="button" onClick={Clickonclick2} className="btn btn-info mx-2">Convert to Lower Case</button>
    <button type="button" onClick={handleCopy} className="btn btn-info mx-2">Copy Text</button>
    
    <button type="button" onClick={gmail} className="btn btn-info mx-2">Create Gmail I'd</button>
    <button type="button" onClick={ClearText} className="btn btn-info mx-2">Clear Text</button>
    
 <br/><br/>

    <h1> TEXT SUMMARY: </h1>
    {text.split(" ").length} words , {text.length} characters , {text.split(" ").length*0.008} sec Reading Time <br/>
    Preview: <br/> {text.length>0?text:"Start Typing In the Above Box to Preview "}
</div>
</>
  )
}
