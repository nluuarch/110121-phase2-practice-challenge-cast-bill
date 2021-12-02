import React, { useEffect, useState } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = "http://localhost:8002/bills "

export default function App() {
  const [bills, setBills] = useState([]);
  const [setCast, setCastBill] = useState([]);

  useEffect(
    () =>
    fetch(API)
        .then((res) => res.json())
        .then((json) => setBills(json)),
    []
  );

  function handleDisplayBill(event){
    // if(bill.cast === true) {
    //   return;
    // } else {
    //   setBills(bills.map(b => 
    //     b.id === bill.id ? {...bill, cast: true} : b
    //     ));
    //   }
    //   console.log("BILL CAST");
    console.log(event)
  }

  
  return (
    <div>
      <BillsCast setCastBill={setCastBill}/>
      <BillCollection bills={bills} handleDisplayBill={handleDisplayBill}/>
    </div>
  );
}
