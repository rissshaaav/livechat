//api call using fetch to verify user using cookie as header in get request
export const verifyUserApiCall = async () => {
  try {
    const response = await fetch("http://localhost:3001/user/verifyUser", {
      method: "GET",
    });
    const data = await response.json();
    console.log("verifyuser api call", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
