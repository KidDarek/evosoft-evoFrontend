export const getUsers = async (setData, setError) => {
  const getAllUsersEndpoint = "http://localhost:5232/User";
  try {
    const response = await fetch(getAllUsersEndpoint);
    const json = await response.json();
    setData(json);
  } catch (error) {
    setError(error);
  }
};
