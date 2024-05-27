import { useContext } from "react";
import AddItemform from "./AddItemform";
import ButtonGroup from "./ButtonGroup";
import { ItemsContext } from "../contexts/ItemsContextProvider";

const Sidebar = () => {
	const {
		handleAddItem,
		handleRemoveAllItems,
		handleResetToInitial,
		handleMarkAllAsComplete,
		handleMarkAllAsIncomplete,
	} = useContext(ItemsContext);
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
