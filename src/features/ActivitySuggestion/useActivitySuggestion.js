import API from "API";
import { useQuery } from "react-query";

const buildQuery = () => {
  return "";
};
/**
 *
 * @param {*} param0
 * @returns
 */
const useActivitySuggestion = () => {
  const httpResponse = useQuery([`activity-suggestions`], async () => {
    const apiClient = new API(
      REACT_APP_ACTIVITY_SUGGESTION_API_URL
    ).getInstance();
    const res = await apiClient.get(`activity/${buildQuery()}`);
    return res.data;
  });

  return httpResponse;
};

export default useActivitySuggestion;
