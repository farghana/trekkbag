import React from "react";
import AddItemform from "./AddItemform";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
	handleAddItem,
	handleRemoveAllItems,
	handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete
}) => {
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
