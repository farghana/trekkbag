import { useState } from "react";
import Header from "./components/Header";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { defaultItems } from "./lib/constants";
import { useEffect } from "react";

function App() {
	const [items, setItems] = useState(()=> JSON.parse(localStorage.getItem("items")) || defaultItems);
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
		console.log("all done");
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
		<>
			<BackgroundHeading />
			<main>
				<Header
					totalNumberofItems={items.length}
					numberOfItemsPacked={numberOfItemsPacked()}
				/>
				<ItemList
					items={items}
					handleDeleteItem={handleDeleteItem}
					handleToggleItem={handleToggleItem}
				/>
				<Sidebar
					handleAddItem={handleAddItem}
					handleRemoveAllItems={handleRemoveAllItems}
					handleResetToInitial={handleResetToInitial}
					handleMarkAllAsComplete={handleMarkAllAsComplete}
					handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
