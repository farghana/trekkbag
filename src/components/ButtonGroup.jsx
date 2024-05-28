import { useItemsStore } from "../stores/itemStores";
import Button from "./Button";

const ButtonGroup = () => {
	const markAllAsComplete = useItemsStore(state => state.markAllAsComplete);
	const markAllAsIncomplete = useItemsStore(state => state.markAllAsIncomplete);
	const resetToInitial = useItemsStore(state => state.resetToInitial);
	const removeAllItems = useItemsStore(state => state.removeAllItems);
	const secondaryButtons = [
		{ text: "Mark all as complete", onClick: markAllAsComplete },
		{ text: "Mark all as incomplete", onClick: markAllAsIncomplete },
		{ text: "Reset to initial", onClick: resetToInitial },
		{ text: "Remove all items", onClick: removeAllItems },
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
