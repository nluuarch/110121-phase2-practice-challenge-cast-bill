import React from 'react';
import BillCard from './BillCard';

function BillCollection( { bills, handleDisplayBill }) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        { 
          bills.map(bill => <BillCard key={bill.id}  bill={bill} handleDisplayBill={handleDisplayBill}/>)
        }
      </div>
    </div>
  );
}

export default BillCollection;