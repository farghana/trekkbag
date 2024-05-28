import { useItemsStore } from "../stores/itemStores";
import AddItemform from "./AddItemform";
import ButtonGroup from "./ButtonGroup";

const Sidebar = () => {
	const addItem = useItemsStore(state => state.addItem)
	return (
		<div className='sidebar'>
			<AddItemform onAddItem={addItem} />
			<ButtonGroup />
		</div>
	);
};

export default Sidebar;
