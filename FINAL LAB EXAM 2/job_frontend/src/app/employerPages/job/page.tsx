"use client"
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/job');
        setJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const deleteJob = async (jobId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }
      
      await axios.delete(`http://localhost:8000/job/delete/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 container mx-auto px-1 lg:px-20 md:px-10">
      <div>
        <h1 className="text-3xl font-bold mb-8">Job List</h1>
        {loading ? (
          <p className="text-lg">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Description</th>
                  <th className="border border-gray-300 px-4 py-2">Budget</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="bg-white">
                    <td className="border border-gray-300 px-4 py-2">{job.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{job.title}</td>
                    <td className="border border-gray-300 px-4 py-2">{job.description}</td>
                    <td className="border border-gray-300 px-4 py-2">{job.budget}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        className="text-white bg-red-700 px-3 py-1 rounded-xl hover:bg-black mr-2"
                        onClick={() => deleteJob(job.id)}
                      >
                        Delete
                      </button>
                      <Link href={`/employerPages/job/edit/${job.id}`}>
                        <a className="text-white bg-blue-500 px-3 py-1 rounded-xl hover:bg-blue-700">
                          Edit
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
