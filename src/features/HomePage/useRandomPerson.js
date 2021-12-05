import { useQuery } from "react-query";
import API from "API";

/**
 * @returns a random person
 */
const useRandomPerson = () => {
  const httpResponse = useQuery("randomPersons", async () => {
    const apiClient = new API(
      process.env.REACT_APP_RANDOM_PERSONS_API_URL
    ).getInstance();
    const res = await apiClient.get("api");
    return res.data;
  });

  return httpResponse;
};

export default useRandomPerson;
