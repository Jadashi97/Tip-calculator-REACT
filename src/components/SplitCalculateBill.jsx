import React from 'react'

const SplitCalculateBill = () => {
  return (
    <div>
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

export default SplitCalculateBill;
