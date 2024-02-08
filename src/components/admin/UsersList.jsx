import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const UsersList = ({ users, handleView, handleUpdate }) => {
    // State to manage the visibility of the user details modal
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    // Function to handle the click event of the "View" button
    const handleViewClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };



    const handleDelete = async (userId) => {

        try {
            await axios.delete(`http://localhost:8081/users/${userId}`)
                .then(function (response) {
                    console.log("deleted");
                    window.location.reload();

                })
                .catch(function (error) {
                    console.log(error);
                });
        }catch (error){
            console.error("error" + error)
        }

    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
                <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="px-6 py-3 uppercase font-semibold text-sm text-left">Id</th>
                    <th className="px-6 py-3 uppercase font-semibold text-sm text-left">Firstname</th>
                    <th className="px-6 py-3 uppercase font-semibold text-sm text-left">Lastname</th>
                    <th className="px-6 py-3 uppercase font-semibold text-sm text-left">Role</th>
                    <th className="px-6 py-3 uppercase font-semibold text-sm text-center">Actions</th>
                </tr>
                </thead>
                <tbody className="text-gray-700">
                {users.map(user => (
                    <tr key={user.id} className="border-b border-gray-200">
                        <td className="px-6 py-4">{user.id}</td>
                        <td className="px-6 py-4">{user.firstName}</td>
                        <td className="px-6 py-4">{user.lastName}</td>
                        <td className="px-6 py-4">{user.role}</td>
                        <td className="px-6 py-4 space-x-2 flex justify-center">
                            {/* Functional buttons */}
                            <button
                                className="px-3 py-1 text-sm text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-md focus:outline-none"
                                onClick={() => handleViewClick(user)}
                            >
                                View
                            </button>
                            <Link to={`/user/update/${user.id}`}>
                                <button
                                    className="px-3 py-1 text-sm text-green-500 bg-green-100 hover:bg-green-200 rounded-md focus:outline-none"
                                    onClick={() => handleUpdate(user.id)}
                                >
                                    Update
                                </button>
                            </Link>
                            <button
                                className="px-3 py-1 text-sm text-red-500 bg-red-100 hover:bg-red-200 rounded-md focus:outline-none"
                                onClick={() => handleDelete(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* User details modal */}
            {showModal && (
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">User Details</h2>
                        <p><strong>Id:</strong> {selectedUser.id}</p>
                        <p><strong>Firstname:</strong> {selectedUser.firstName}</p>
                        <p><strong>Lastname:</strong> {selectedUser.lastName}</p>
                        <p><strong>Role:</strong> {selectedUser.role}</p>
                        <button
                            className="px-3 py-1 mt-4 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersList;
