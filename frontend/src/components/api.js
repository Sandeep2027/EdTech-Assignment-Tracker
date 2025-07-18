import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export const signup = (data) => api.post('/auth/signup', data);
export const login = (data) => api.post('/auth/login', data);
export const createAssignment = (data) => api.post('/assignments', data);
export const getAssignments = () => api.get('/assignments');
export const submitAssignment = (assignmentId, data) => api.post(`/submissions/${assignmentId}`, data);
export const getSubmissions = (assignmentId) => api.get(`/submissions/${assignmentId}`);
