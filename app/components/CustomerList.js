// /src/components/CustomerList.js
import React from 'react';

const CustomerList = ({ customers, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <span>{customer.name} - {customer.email} - {customer.phone}</span>
            <button onClick={() => onUpdate(customer)}>Update</button>
            <button onClick={() => onDelete(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
