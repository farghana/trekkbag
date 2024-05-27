import AddItemform from "./AddItemform";
import ButtonGroup from "./ButtonGroup"
import { useItemsContext } from "../lib/hooks";

const Sidebar = () => {
	const {
		handleAddItem,
		handleRemoveAllItems,
		handleResetToInitial,
		handleMarkAllAsComplete,
		handleMarkAllAsIncomplete,
	} = useItemsContext();
	return (
		<div className='sidebar'>
			<AddItemform onAddItem={handleAddItem} />
			<ButtonGroup
				handleRemoveAllItems={handleRemoveAllItems}
				handleResetToInitial={handleResetToInitial}
				handleMarkAllAsComplete={handleMarkAllAsComplete}
				handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
			/>
		</div>
	);
};

export default Sidebar;
