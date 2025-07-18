import React, { useState, useEffect } from 'react';
import { signup, login, createAssignment, getAssignments, submitAssignment, getSubmissions, setAuthToken } from './api';
import AuthForm from './components/AuthForm';
import AssignmentForm from './components/AssignmentForm';
import AssignmentList from './components/AssignmentList';
import SubmissionList from './components/SubmissionList';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    setAuthToken(token);
    if (token) {
      // Fetch user info if needed
    }
  }, [token]);

  const handleSignup = async (data) => {
    try {
      await signup(data);
      alert('User created');
    } catch (err) {
      alert('Signup failed: ' + err.response?.data?.detail || 'Unknown error');
    }
  };

  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      setToken(res.data.access_token);
    } catch (err) {
      alert('Login failed: ' + err.response?.data?.detail || 'Unknown error');
    }
  };

  const handleCreateAssignment = async (data) => {
    try {
      await createAssignment(data);
      alert('Assignment created');
      fetchAssignments();
    } catch (err) {
      alert('Failed to create assignment: ' + err.response?.data?.detail || 'Unknown error');
    }
  };

  const handleSubmitAssignment = async (assignmentId, data) => {
    try {
      await submitAssignment(assignmentId, data);
      alert('Submission successful');
    } catch (err) {
      alert('Submission failed: ' + err.response?.data?.detail || 'Unknown error');
    }
  };

  const handleViewSubmissions = async (assignmentId) => {
    try {
      const res = await getSubmissions(assignmentId);
      setSubmissions(res.data);
    } catch (err) {
      alert('Failed to fetch submissions: ' + err.response?.data?.detail || 'Unknown error');
    }
  };

  const fetchAssignments = async () => {
    try {
      const res = await getAssignments();
      setAssignments(res.data);
    } catch (err) {
      alert('Failed to fetch assignments: ' + err.response?.data?.detail || 'Unknown error');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {!token ? (
        <AuthForm onSignup={handleSignup} onLogin={handleLogin} />
      ) : (
        <div className="space-y-4">
          {user?.role === 'teacher' ? (
            <>
              <AssignmentForm onSubmit={handleCreateAssignment} />
              <AssignmentList assignments={assignments} onFetch={fetchAssignments} onViewSubmissions={handleViewSubmissions} />
              <SubmissionList submissions={submissions} />
            </>
          ) : (
            <AssignmentList assignments={assignments} onFetch={fetchAssignments} onSubmit={handleSubmitAssignment} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;