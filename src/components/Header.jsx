import Logo from "./Logo";
import Counter from "./Counter";
import { useItemsStore } from "../stores/itemStores";

const Header = () => {
	const items = useItemsStore(state => state.items);
	const numberOfItemsPacked = items.filter(item => item.packed === true).length
	return (
		<header>
			<Logo />
			<Counter
				totalNumberofItems={items.length}
				numberOfItemsPacked={numberOfItemsPacked}
			/>
		</header>
	);
};

export default Header;
