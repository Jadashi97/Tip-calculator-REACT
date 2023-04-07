import React, { useEffect } from 'react';
import { useState } from 'react';

const TotalBill = ()=> {
    
    const [bill, setBill] = useState('');
    const [tipPercentage, setTipPercentage] = useState("10%");
    const [tipAmount, setTipAmount] = useState(0);
    const [splitTotal, setSplitTotal] = useState("$0.00");
    const [split, setSplit] = useState(1);

    function handleBillChange(e){
        let value =  e.target.value;
        setBill(value);
    }

    function handleTipChange(e){
        let value = e.target.value.replace('%','');
        if(value.indexOf('%') === -1){
            value = value+ '%';
        }
        setTipPercentage(value);
    }   


    function increasePeople(){
        setSplit(oldValue => oldValue + 1)
    }

    function decreasePeople(){
        // returns 1 if the resulting value is less than 1 & ensures that the value of split is always at least 1.
        setSplit(oldValue => Math.max(oldValue - 1, 1)); 
    }

    function calculate(){
        const percentage = 1 + parseInt(tipPercentage.replace('%',''))/100;
        const result = (bill * percentage / split).toFixed(2);
        setSplit(result);
    }

    useEffect(()=>{
        calculate()
    }, [bill,tipPercentage, split])

    return (
        <div>
            <div className="container" id="topContainer">
                <div className="title">Bill total</div>
                <div className="inputContainer">
                    <span>$</span>
                    <input 
                        type="text" 
                        placeholder={"0.00"} 
                        id='tipInput'
                        value={bill}
                        onChange={handleBillChange}
                    />
                </div>
            </div>
            <div className="container">
            <div className="title">Tip</div>
                <div className="inputContainer">
                    <input 
                        type="text" 
                        id="tipInput" 
                        placeholder={"10"} 
                        value={tipPercentage}
                        onChange={handleTipChange}
                    />
                </div>
            </div>
            <div className="container" id="bottom">
                <div className="splitContainer">
                    <div className="title">People</div>
                    <div className="controls">
                        <span className="buttonContainer">
                            <button className="splitButton" onClick={increasePeople}>
                                <span className="buttonText">+</span>
                            </button>
                        </span>
                        <span className="splitAmount" id="numberOfPeople">{split}</span>
                        <span className="buttonContainer">
                            <button className="splitButton" onClick={decreasePeople}>
                            <span className="buttonText">-</span>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="totalContainer">
                    <div className="title">Total per Person</div>
                    <div className="total" id="perPersonTotal">{splitTotal}</div>
                </div>
            </div>
        </div>
    )
}
export default TotalBill;
