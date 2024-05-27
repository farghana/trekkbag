import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

const ButtonGroup = () => {
	const {
		handleRemoveAllItems,
		handleResetToInitial,
		handleMarkAllAsComplete,
		handleMarkAllAsIncomplete,
	} = useItemsContext()
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
