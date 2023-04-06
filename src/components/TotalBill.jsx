import React from 'react'

const TotalBill = () => {
  return (
    <div>
        <div className="container" id="topContainer">
            <div className="title">Bill total</div>
            <div className="inputContainer">
                <span>$</span>
                <input 
                    onKeyUp="calculateBill()" 
                    type="text" 
                    id="billTotalInput" 
                    placeholder="0.00" 
                />
            </div>
        </div>
        <div className="container">
        <div className="title">Tip</div>
            <div className="inputContainer">
                <span>%</span>
                <input 
                    onKeyUp="calculateBill()" 
                    type="text" 
                    id="tipInput" 
                    placeholder="10" 
                />
            </div>
        </div>
    </div>
  )
}

export default TotalBill;
