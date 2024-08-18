import React, { useState, useMemo } from "react";

export const SpinnerContext = React.createContext();

const SpinnerContextProvider = ({ children }) => {
    const [spinnerState, setSpinnerState] = useState(false);

    const toggleSpinner = (state) => {
        setSpinnerState(state);
    };
    const spinnerContextValue = useMemo(() => {
        return { spinnerState, toggleSpinner };
    }, [spinnerState]);

    return (
        <SpinnerContext.Provider value={spinnerContextValue}>
            {children}
        </SpinnerContext.Provider>
    );
};
export default SpinnerContextProvider;
