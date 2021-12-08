import API from "API";
import { useQuery } from "react-query";

const buildQuery = (...params) => {
  return "";
};

/**
 *
 * @param  {...params} query params for the api
 * @returns activity suggested accordingly to the given params
 */
const useActivitySuggestion = (...params) => {
  const httpResponse = useQuery([`activity-suggestions`], async () => {
    const apiClient = new API(
      REACT_APP_ACTIVITY_SUGGESTION_API_URL
    ).getInstance();
    const res = await apiClient.get(`activity/${buildQuery(...params)}`);
    return res.data;
  });

  return httpResponse;
};

export default useActivitySuggestion;
