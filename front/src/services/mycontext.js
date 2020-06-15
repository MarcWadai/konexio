import { createContext } from "react";

const defaultValue = {
    user: {},
    error: null,
    setUser: () => {},
    setError: () => {}
}

const MyContext = createContext(defaultValue);

export default MyContext
