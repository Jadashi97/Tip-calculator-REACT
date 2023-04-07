import React from 'react';
import { useState } from 'react';

const TotalBill = ()=> {
    
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState("10%");


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
                        onChange={e => setBill(e.target.value)}
                    />
                </div>
            </div>
            <div className="container">
            <div className="title">Tip</div>
                <div className="inputContainer">
                    <span>%</span>
                    <input 
                        type="text" 
                        id="tipInput" 
                        placeholder={"10"} 
                        onChange={e => setTip(e.target.value)}
                    />
                </div>
            </div>
            <div className="container" id="bottom">
                <div className="splitContainer">
                    <div className="title">People</div>
                    <div className="controls">
                        <span className="buttonContainer">
                            <button className="splitButton" onClick={"increasePeople()"}>
                                <span className="buttonText">+</span>
                            </button>
                        </span>
                        <span className="splitAmount" id="numberOfPeople">1</span>
                        <span className="buttonContainer">
                            <button className="splitButton" onClick={"decreasePeople()"}>
                            <span className="buttonText">-</span>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="totalContainer">
                    <div className="title">Total per Person</div>
                    <div className="total" id="perPersonTotal">$0.00</div>
                </div>
            </div>
        </div>
    )
}
export default TotalBill;
