"use client"
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditJob() {
  const router = useRouter();
  const { jobId } = router.query;
  const [jobData, setJobData] = useState({ title: '', description: '', budget: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }

        const response = await axios.get(`http://localhost:8000/job/edit/${jobId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  const handleInputChange = (e) => {
    // Input change handler remains the same
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      await axios.patch(`http://localhost:8000/job/edit/${jobId}`, jobData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push('/employerPages/job');
    } catch (error) {
      console.error('Error editing job:', error);
    }
  };

  // Loading and UI remains the same

}
