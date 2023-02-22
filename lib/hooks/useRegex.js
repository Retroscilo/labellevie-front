import { useState, useEffect } from "react";

function useRegex(regex, message) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(undefined);

  useEffect(() => {
    if (error && message) setHelperText(message);
    else setHelperText(undefined);
  }, [error, message]);

  useEffect(() => {
    if (!error && value.length) setIsValid(true);
    else setIsValid(false);
  }, [error, value]);

  function onBlur(e) {
    if (!regex.test(value) && value !== "") setError(true);
  }

  function onChange(e) {
    if (regex.test(e.currentTarget.value) || e.currentTarget.value !== "") setError(false);
    setValue(e.currentTarget.value);
  }

  return { value, isValid, props: { error, helperText, onBlur, onChange } };
}

export default useRegex;
