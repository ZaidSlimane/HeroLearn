import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [weeks, setWeeks] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8081/courses');
            setCourses(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    };

    const fetchWeeks = async (courseId) => {
        try {
            const response = await axios.get(`http://localhost:8081/weeks/course/${courseId}`);
            setWeeks(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    };

    const fetchMaterials = async (weekId) => {
        try {
            const response = await axios.get(`http://localhost:8081/materials/week/${weekId}`);
            console.log(response.data)
            setMaterials(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    };

    const handleCardClick = (course) => {
        setSelectedCourse(course);
        fetchWeeks(course.id); // Fetch weeks associated with the selected course
    };

    const handleWeekClick = (week) => {
        fetchMaterials(week.id); // Fetch materials associated with the selected week
    };

    const handleClosePopup = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {courses.map((course, index) => (
                        <div key={index}>
                            <div className="bg-white shadow-md rounded-lg p-4" onClick={() => handleCardClick(course)}>
                                <div className="mb-2 h-32 w-full bg-gray-200 rounded-lg">
                                    <img className="mb-2 h-32 w-full object-cover rounded-lg" alt=""/>
                                </div>
                                <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                                <p className="text-gray-600">{course.description}</p>
                                <p className="text-gray-600">{course.links}</p>

                            </div>
                        </div>
                    ))}
                </div>
            )}
            {selectedCourse && (
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">{selectedCourse.title}</h2>
                        <p>{selectedCourse.description}</p>
                        {/* Display weeks */}
                        {weeks.map((week, index) => (
                            <div key={index}>
                                <p onClick={() => handleWeekClick(week)}>Week {week.weekNumber}</p>
                                {/* Map over educational materials for the current week */}
                                {week.educationalMaterials.map((material, materialIndex) => (
                                    <div key={materialIndex}>
                                        <p>Type: {material.type}</p>
                                        <p>Content: {material.content}</p>
                                        <p>Description: {material.description}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <button
                            className="px-3 py-1 mt-4 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                            onClick={handleClosePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentDashboard;
