// /app/customers/[id]/page.js
"use client"; // Mark this component as a Client Component

import { useRouter } from 'next/navigation';

// Sample customer details (replace this with an API call in a real app)
const customerDetails = {
    1: { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    2: { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    3: { name: 'Alice Johnson', email: 'alice@example.com', phone: '456-123-7890' },
};

const CustomerDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const customer = customerDetails[id];

    if (!customer) {
        return <div>Loading...</div>; // Handle loading state or error
    }

    return (
        <div>
            <h1>Customer Details</h1>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phone}</p>
        </div>
    );
};

export default CustomerDetail;
