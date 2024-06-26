export const signupApiCall = async (userData) => {
  try {
    const response = await fetch("http://localhost:3001/user/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    // console.log("response", response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Path: client/src/components/Signup.js