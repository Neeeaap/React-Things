import { useState } from 'react';

export default function useInput(initialValue, inputFn) {
    const [enteredValue, setEnteredValue] = useState(initialValue);
    const [edited, setEdited] = useState(false);

    const valueIsInvalid = !inputFn(enteredValue);
    const showError = valueIsInvalid && edited;

    function InputChangeHandler(value) {
        setEnteredValue(value);
        setEdited(false);
    }

    function InputBlurHandler() {
        setEdited(true);
    }

    return {
        value: enteredValue,
        InputChangeHandler,
        InputBlurHandler,
        hasError: showError
    }
}