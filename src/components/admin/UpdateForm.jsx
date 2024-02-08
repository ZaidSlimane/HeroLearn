import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateForm = ({ userId, updateUser }) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        role: ''
    });

    useEffect(() => {
        // Fetch user data based on userId
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/users/${userId}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/users/${userId}`, userData);
            // Call the updateUser function passed as prop to update the user list
            updateUser();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" value={userData.role} onChange={handleChange}>
                    <option value="ADMIN">ADMIN</option>
                    <option value="TEACHER">TEACHER</option>
                    <option value="STUDENT">STUDENT</option>
                </select>
            </div>
            <button type="submit">Update User</button>
        </form>
    );
};

export default UpdateForm;
