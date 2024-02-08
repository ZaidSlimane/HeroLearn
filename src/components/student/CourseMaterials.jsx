import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseMaterials = () => {
    const { courseId } = useParams();
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [courseId]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/weeks/course/${courseId}`);
            setMaterials(response.data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Course Materials</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : materials.length === 0 ? (
                <p>No materials available</p>
            ) : (
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {materials.map((material, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                {material.weekNumber}
                            </h2>
                            <p className="mb-3 text-gray-500 dark:text-gray-400"></p>
                            <a
                                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
                            >
                                Learn more
                                <svg
                                    className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CourseMaterials;
