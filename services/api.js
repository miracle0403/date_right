const BASE_URL = 'http://192.168.0.4:5000/api'; // replace with YOUR IP

export const registerUser = async (data) => {
  console.log("Sending:", data);

  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const text = await res.text();   // ✅ NOT json()
  console.log("RAW RESPONSE:", text);

  return text;
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

