// app/customers/page.js
import Link from 'next/link';

const customers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
];

const CustomerList = () => {
    return (
        <div>
            <h1>Customer List</h1>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        <Link href={`/customers/${customer.id}`}>
                            {customer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
