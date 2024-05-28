import { useState } from "react";
import Button from "./Button";

const AddItemform = ({ onAddItem }) => {
	const [itemText, setItemText] = useState("");
	const submitHandler = (e) => {
		e.preventDefault();
		onAddItem(itemText);
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
