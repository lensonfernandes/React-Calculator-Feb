import React, { useEffect, useState } from "react";

const Input = () => {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [result, setResult] = useState("");
  let [message, setMessage] = useState([]);
  let [info, setInfo] = useState([]);

  let runCalculate = (event) => {
    let id = event.target.id;

    setMessage([]);
    setInfo([]);

    checkValidation();
    findResult({ id });
  };

  let checkValidation = () => {
    if (num1 == "") {
      setMessage((prevState) => {
        return [...prevState, "Num1 cannot be empty"];
      });
      //console.log('Num1 cannot be empty')
    }

    if (num2 == "") {
        setMessage((prevState) => {
            return [...prevState, "Num2 cannot be empty"];
          });
     // setMessage([...message, "Num2 cannot be empty"]);
      //console.log('Num2 cannot be empty')
    }

    if (isNaN(num1)) {
        setMessage((prevState) => {
            return [...prevState, "Num1 should be number"];
          });
      //setMessage([...message, "Num1 should be number"]);
      // console.log('Num1 should be a number')
    }

    if (isNaN(num2)) {
        setMessage((prevState) => {
            return [...prevState, "Num2 should be number"];
          });
      //setMessage([...message, "Num2 should be number"]);
      //console.log('Num2 should be a number')
    }

    if (num1.includes(".")) {
        setInfo((prevState) => {
            return [...prevState, "Num1 is a Floating number"];
          });
    //  setMessage([...message, "Num1 is a Floating number"]);
      // console.log('Num1 is a Floating number')
    }
    if (num2.includes(".")) {
        setInfo((prevState) => {
            return [...prevState, "Num2 is a Floating number"];
          });
      //setMessage([...message, "Num2 is a Floating number"]);
      //console.log('Num2 is a Floating number')
    }
    if (num1 > 0) {
        setInfo((prevState) => {
            return [...prevState, "Num1 is Positive"];
          });
    // setMessage([...message, "Num1 is Positive"]);
      // console.log('Num1 is Positive')
    }
    if (num1 < 0) {
        setInfo((prevState) => {
            return [...prevState, "Num1 is Negative"];
          });
    //  setMessage([...message, "Num1 is Negative"]);
      //console.log('Num1 is Negative')
    }
    if (num2 > 0) {
        setInfo((prevState) => {
            return [...prevState, "Num2 is Positive"];
          });
    //  setMessage([...message, "Num2 is Positive"]);
      //console.log('Num2 is Positive')
    }
    if (num2 < 0) {
        setInfo((prevState) => {
            return [...prevState, "Num2 is Negative"];
          });
      //setMessage([...message, "Num2 is Negative"]);
      // console.log('Num2 is Negative')
    }
  };

  let findResult = ({ id }) => {
    console.log(id);
    if (id == 1) {
      setResult(Number(num1) + Number(num2));
    }
    if (id == 2) {
      setResult(num1 - num2);
    }
    if (id == 3) {
      setResult(num1 * num2);
    }
    if (id == 4) {
      setResult(num1 / num2);
    }
  };
  useEffect(() => {
    // console.log(num1)
  }, [num1]);

  useEffect(() => {
    //  console.log(num2)
  }, [num2]);

  useEffect(() => {
     console.log(result)
  }, [result]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    console.log(info);
  }, [info]);

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

      <div className="row ">
        <button className="col-auto ms-2" onClick={runCalculate} id={"1"}>
          {" "}
          +{" "}
        </button>
        <button className="col-auto" onClick={runCalculate} id={"2"}>
          {" "}
          -{" "}
        </button>
        <button className="col-auto" onClick={runCalculate} id={"3"}>
          {" "}
          *{" "}
        </button>
        <button className="col-auto" onClick={runCalculate} id={"4"}>
          {" "}
          /{" "}
        </button>
      </div>
     { (result.length!=0) && (message.length==0) && <div className=" text-white">Result = {result}</div>}
     {( message.length>0) && (<div className='text-danger'>Error: { message.toString().split(",").join("; ")}</div>)}
      {(info.length>0) && (<div className='text-info'>Info: {info.toString().split(",").join("; ")}</div>)}
      {(message.length==0)&&(result.length!=0) && <div className='text-success'>Success: Your result is shown above</div>}
      
    </div>
  );
};

export default Input;
