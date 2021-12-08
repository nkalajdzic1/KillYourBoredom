import { useState } from "react";

/**
 * @param {boolean} initValue, initial value of the toggle hook
 * @returns {array} [value, toggleValue], 'value' is the value of the toggle 'toggleValue' is used to toggle the value
 */
const useToggle = (initValue = false) => {
  const [value, setValue] = useState(initValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
};

export default useToggle;
