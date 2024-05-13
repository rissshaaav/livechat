//api call using fetch to verify user using cookie as header in get request
export const verifyUserApiCall = async (jwtFromClient) => {
  try {
    const response = await fetch("http://localhost:3001/user/verifyUser", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jwtFromClient),
    });
    const data = await response.json();
    if (data.username && data.email) {
      return data;
    }
    else{
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
