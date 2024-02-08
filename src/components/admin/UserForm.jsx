import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(firstName === "" || lastName === "" || password === "" || email === "" || phoneNumber === "" || role === ""){
            console.log("Data invalid");
            return;
        }
        const userData = {
            firstName,
            lastName,
            email,
            password,
            role,
            phoneNumber
        };

        axios.post('http://localhost:8081/users', userData)
            .then(function (response) {
                console.log(response);
                setSuccessMessage('User created successfully!');
                // Clear form fields
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setPhoneNumber('');
                setRole('');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleCancel = () => {

    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 border rounded-md shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Create User</h2>
                    <Link to="/admin">
                        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none">
                            Cancel
                        </button>
                    </Link>
                </div>
                {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-1">First Name:</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border w-full p-2 rounded-md" />
                    </div>
                    <div>
                        <label className="block mb-1">Last Name:</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border w-full p-2 rounded-md" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-2 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border w-full p-2 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Phone Number:</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border w-full p-2 rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="border w-full p-2 rounded-md">
                        <option value="">Select Role</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="TEACHER">TEACHER</option>
                        <option value="STUDENT">STUDENT</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create User</button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
