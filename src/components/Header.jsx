import { useItemsContext } from "../lib/hooks";
import Logo from "./Logo";
import Counter from "./Counter";

const Header = () => {
	const {items, numberOfItemsPacked} = useItemsContext();
	return (
		<header>
			<Logo />
			<Counter
				totalNumberofItems={items.length}
				numberOfItemsPacked={numberOfItemsPacked()}
			/>
		</header>
	);
};

export default Header;
