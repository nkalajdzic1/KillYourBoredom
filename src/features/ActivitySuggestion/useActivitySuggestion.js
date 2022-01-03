import API from "API";
import { useQuery } from "react-query";

/**
 * @param {Object} config configuration object for the useQuery hook
 * @param  {string} queryProps string with params for the api
 * @returns activity suggested accordingly to the given params
 */
const useActivitySuggestion = (config, queryProps) => {
  return useQuery(
    ["activity-suggestions", queryProps],
    async () => {
      const apiClient = new API(
        process.env.REACT_APP_ACTIVITY_SUGGESTION_API_URL
      ).getInstance();
      const res = await apiClient.get(`/activity${queryProps && queryProps}/`);
      return res.data;
    },
    config
  );
};

export default useActivitySuggestion;
