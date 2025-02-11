import { createContext, useState } from "react";

export const Context = createContext(); // Creamos el contexto

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado para el carrito

    return (
        <Context.Provider value={{ cart, setCart }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
