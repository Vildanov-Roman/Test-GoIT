import { useState } from 'react';

export const useLocalStorage = initialState => {
    const [state, setState] = useState(initialState);
    const storage = () => {
        setState(!state);
    };
    return [state, storage];
};