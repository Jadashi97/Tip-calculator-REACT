import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import MainCalcPage from './components/SplitCalculateBill';
import TotalBill from './components/TotalBill';
import SplitCalculateBill from './components/SplitCalculateBill';

function App() {

  return (
    <div>
      <Header/>
      <div className="wrapper">
        <TotalBill/>
        <SplitCalculateBill/>
      </div>
    </div>
  )
}

export default App
