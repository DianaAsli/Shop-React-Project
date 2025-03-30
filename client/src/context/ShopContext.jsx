import { createContext } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'BGN';

    const value = {
        currency
    }

    return (<ShopContext.Provider> value={value}
        {props.children}
    </ShopContext.Provider>)
}

export default ShopContextProvider;