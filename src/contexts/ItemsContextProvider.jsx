import { defaultItems } from "../lib/constants";
import { useEffect, useState,createContext } from "react";
export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
	const [items, setItems] = useState(
		() => JSON.parse(localStorage.getItem("items")) || defaultItems
	);
	const handleAddItem = (newItem) => {
		const newItems = [...items, newItem];
		setItems(newItems);
	};

	const handleRemoveAllItems = () => {
		setItems([]);
	};

	const handleResetToInitial = () => {
		setItems(defaultItems);
	};

	const handleMarkAllAsComplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: true };
		});
		setItems(newItems);
	};

	const handleMarkAllAsIncomplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: false };
		});
		setItems(newItems);
	};

	const handleDeleteItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const handleToggleItem = (id) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, packed: !item.packed };
			}
			return item;
		});
		setItems(newItems);
	};

	const numberOfItemsPacked = () => {
		const packedItems = items.filter((item) => item.packed === true);
		return packedItems.length;
	};

	useEffect(() => {
		//save to localStorage
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);
	return (
		<ItemsContext.Provider
			value={{
				items,
				handleAddItem,
				handleDeleteItem,
				handleToggleItem,
				handleResetToInitial,
				handleMarkAllAsComplete,
				handleMarkAllAsIncomplete,
				handleRemoveAllItems,
        numberOfItemsPacked
			}}
		>
			{children}
		</ItemsContext.Provider>
	);
};

export default ItemsContextProvider;
