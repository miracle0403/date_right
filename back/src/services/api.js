const BASE_URL = 'http://YOUR_IP:5000/api';

export const registerUser = async (data) => {
  console.log("Sending:", data);

  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const text = await res.text();   // 👈 IMPORTANT
  console.log("RAW RESPONSE:", text);

  return text; // don't parse yet
};


export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

