import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState, useMemo } from "react";
import { useItemsStore } from "../stores/itemStores";

const sortingOptions = [
	{
		label: "Sort by default",
		value: "default",
	},
	{
		label: "Sort by packed",
		value: "packed",
	},
	{
		label: "Sort by unpacked",
		value: "unpacked",
	},
];

const ItemList = () => {
	const items =  useItemsStore(state => state.items);
	const deleteItem = useItemsStore(state => state.deleteItem)
	const toggleItem = useItemsStore(state => state.toggleItem)
	const [sortBy, setSortBy] = useState("default");
	const sortedItems = useMemo(
		() =>
			[...items].sort((a, b) => {
				if (sortBy === "packed") {
					return b.packed - a.packed;
				} else if (sortBy === "unpacked") {
					return a.packed - b.packed;
				}
			}),
		[items, sortBy]
	);
	return (
		<ul className='item-list'>
			{!items.length && <EmptyView />}
			{items.length > 0 ? (
				<section className='sorting'>
					<Select
						onChange={(option) => setSortBy(option.value)}
						defaultValue={sortingOptions[0]}
						options={sortingOptions}
					/>
				</section>
			) : null}
			{sortedItems.map((item) => {
				return (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={deleteItem}
						onToggleItem={toggleItem}
					/>
				);
			})}
		</ul>
	);
};

function Item({ item, onDeleteItem, onToggleItem }) {
	return (
		<li className='item'>
			<label>
				<input
					type='checkbox'
					checked={item.packed}
					onChange={() => onToggleItem(item.id)}
				/>
				{item.name}
			</label>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

export default ItemList;
