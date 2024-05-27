import Button from "./Button";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

const ButtonGroup = () => {
	const {
		handleRemoveAllItems,
		handleResetToInitial,
		handleMarkAllAsComplete,
		handleMarkAllAsIncomplete,
	} = useContext(ItemsContext);
	const secondaryButtons = [
		{ text: "Mark all as complete", onClick: handleMarkAllAsComplete },
		{ text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
		{ text: "Reset to initial", onClick: handleResetToInitial },
		{ text: "Remove all items", onClick: handleRemoveAllItems },
	];
	return (
		<section className='button-group'>
			{secondaryButtons.map(({ text, onClick }) => (
				<Button
					key={text + Math.random(3)}
					buttonType='secondary'
					onClick={onClick}
				>
					{text}
				</Button>
			))}
		</section>
	);
};

export default ButtonGroup;
