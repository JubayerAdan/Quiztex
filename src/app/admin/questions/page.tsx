"use client";
import React, { useState } from 'react';
import { FaEllipsisV, FaLink } from 'react-icons/fa';

export default function Page() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Questions</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition duration-300"
          onClick={toggleModal}
        >
          + Add
        </button>
      </div>

      {/* Wider container for questions */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-screen-xl mx-auto w-[25em]">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600 text-lg">What is React?</p>
          <div className="flex space-x-4 items-center">
            {/* Link Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              <FaLink />
            </button>
            {/* Ellipsis Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              <FaEllipsisV />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600 text-lg">What is Next.js?</p>
          <div className="flex space-x-4 items-center">
            {/* Link Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              <FaLink />
            </button>
            {/* Ellipsis Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              <FaEllipsisV />
            </button>
          </div>
        </div>

        {/* Add more questions as needed */}
      </div>

      {/* Modal (conditionally rendered) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-2xl font-semibold mb-4">Add a New Question</h2>

            {/* Modal content (form, etc.) */}
            
            <form>
            
              <input
                type="text"
                placeholder="Enter your question"
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </form>

            {/* Close button (for mobile/desktop users) */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              onClick={toggleModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
