import { useState } from "react";
import Button from "./Button";

const AddItemform = ({ onAddItem }) => {
	const [itemText, setItemText] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		const newItem = {
			id: new Date().getTime(),
			name: itemText,
			packed: false,
		};
		onAddItem(newItem);
		setItemText("");
	};
	return (
		<form onSubmit={submitHandler}>
			<h2>Add an Item</h2>
			<input
				type='text'
				name=''
				value={itemText}
				onChange={(e) => {
					setItemText(e.target.value);
				}}
				placeholder='e.g. toothbrush'
			/>
			<Button>Add to List</Button>
		</form>
	);
};

export default AddItemform;
