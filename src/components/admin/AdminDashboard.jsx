/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import UsersList from './UsersList';
import UserForm from './UserForm';
import UpdateForm from './UpdateForm';
import { Link } from 'react-router-dom';
import axios from "axios";

const AdminDashboard = () => {



  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/users');
      setUsers(response.data);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };
  // Mock data for users

  // State to toggle user form visibility
  const [showUserForm, setShowUserForm] = useState(false);
  // State to track the selected user for update
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to add a new user
  const addUser = (user) => {
    setUsers([...users, user]);
    setShowUserForm(false); // Hide user form after adding user
  };

  // Function to handle the update action
  const handleUpdate = (id) => {
    const userToUpdate = users.find(user => user.id === id);
    setSelectedUser(userToUpdate);
  };

  // Function to update user details
  const updateUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
        user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setSelectedUser(null); // Reset selected user after update
  };

  // Function to handle the delete action
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  // Placeholder function for handling the view action
  const handleView = (id) => {
    console.log(`View user with ID ${id}`);
  };

  // Function to handle closing/hiding the UserForm
  const onClose = () => {
    setShowUserForm(false);
  };

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="flex justify-center mb-4">
          {/* Toggle the visibility of UserForm */}
          <Link to="/user-form" className="block px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
            {showUserForm ? "Hide User Form" : "Create User"}
          </Link>
        </div>
        {/* Render UserForm based on showUserForm state */}
        {showUserForm && <UserForm isUpdate={false} onSubmit={addUser} onClose={onClose} />}
        {selectedUser && <UpdateForm user={selectedUser} updateUser={updateUser} />}
        <UsersList users={users} handleView={handleView} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      </div>
  );
};

export default AdminDashboard;
