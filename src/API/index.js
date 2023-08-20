const COHORT_NAME = '2302-acc-pt-web-pt-d';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const API = {
  login: async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // Handle successful login
        return data;
      } else {
        // Handle login failure
        throw new Error(data.error.message);
      }
    } catch (error) {
      throw new Error('An error occurred during login.');
    }
  },

  register: async (userDetails) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: userDetails }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful registration
        return data;
      } else {
        // Handle registration failure
        throw new Error(data.error.message);
      }
    } catch (error) {
      throw new Error('An error occurred during registration.');
    }
  },

  // Add more API functions for various actions here
};

export default API;