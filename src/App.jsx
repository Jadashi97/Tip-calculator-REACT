import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import TotalBill from './components/TotalBill';

function App() {

  return (
    <div>
      <Header/>
      <div className="wrapper">
        <TotalBill/>
      </div>
    </div>
  )
}

export default App
