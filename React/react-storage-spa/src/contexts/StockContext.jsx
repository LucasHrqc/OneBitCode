import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const StockContext = createContext({});

StockContextProvider.propTypes = {
    children: PropTypes.node,
}

export function StockContextProvider({children}) {

    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('obc-react-stock');
        if (!storedItems) return []
        const items = JSON.parse(storedItems);
        items.forEach((item) => {
            item.createdAt = new Date(item.createdAt);
            item.updatedAt = new Date(item.updatedAt);
        });
        return items;
    });

    const getItem = (id) => {
        return items.find(item => item.id === +id);
    }

    const addItem = (item) => {
        setItems((currentState) => {
            const updatedItems = [item, ...currentState];
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems));
            return updatedItems;
        })
    }

    const updateItem = (itemId, newAttributes) => {
        setItems((currentState) => {
            const index = currentState.findIndex(item => item.id === +itemId);
            const updatedItems = [...currentState];
            Object.assign(updatedItems[index], newAttributes, { updatedAt: new Date()})
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems));
            return updatedItems;
        })
    }

    const deleteItem = (id) => {
        setItems((currentState) => {
            const updatedItems = currentState.filter(item => item.id != id);
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems));
            return updatedItems;
        })
    }

    const stock = {
        items,
        getItem,
        addItem,
        deleteItem,
        updateItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}