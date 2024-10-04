import axios from 'axios';
import { rapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const validateBodyPart = (bodyPart) => {
  const allowedValues = ['back', 'cardio', 'chest', 'arms', 'legs', 'shoulders', 'abs'];
  return allowedValues.includes(bodyPart.toLowerCase());
};

const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    return null;
  }
};

export const fetchExercisesByBodypart = async (bodyPart) => {
  if (!validateBodyPart(bodyPart)) {
    console.error(`"${bodyPart}" não é um valor válido para bodyPart.`);
    return null;
  }

  const url = `${baseUrl}/exercises/bodyPart/${bodyPart}?rapidapi-key=${rapidApiKey}`;
  let data = await apiCall(url);
  return data;
};
``
