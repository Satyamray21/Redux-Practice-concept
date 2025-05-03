import axios from 'axios';

export const fetchStates = async () => {
  const res = await axios.get('http://localhost:8000/api/v2/state/states'); // e.g., http://localhost:5000/api/states
  return res.data; // an array of state names
};

export const fetchCitiesByState = async (stateName) => {
  const encodedState = encodeURIComponent(stateName);
  const res = await axios.get(`http://localhost:8000/api/v2/state/cities/${encodedState}`);
  return res.data; // an array of city names
};
