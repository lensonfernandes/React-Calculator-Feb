import React, { useEffect, useState } from "react";

const Input = () => {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");

  let runCalculate = () =>{

    checkValidation();
    findResult();
 }

 let checkValidation = () =>{

 }

 let findResult = () =>{

 }
 useEffect(()=>{
    console.log(num1)
 }, [num1])

 useEffect(()=>{
    console.log(num2)
 }, [num2])

  return (
    <div className="d-flex flex-column gap-2">
      <input
        type="text"
        placeholder="Num 1"
        className="bg-black text-white border-white"        
        value={num1}
        onChange={(e) => {
             setNum1(e.target.value);
          //  console.log(num1);
          }}
        
      />
      <input
        type="text"
        placeholder="Num 2"
        className="bg-black text-white border-white"
        value={num2}
        onChange={(e) => {
          setNum2(e.target.value);
      
        }}
        
      />

<div className='row ' >
        <button className='col-auto ms-2' onClick={runCalculate}> + </button>
        <button className='col-auto'> - </button>
        <button className='col-auto'> * </button>
        <button className='col-auto'> / </button>
    </div>
    </div>
  );
};

export default Input;
