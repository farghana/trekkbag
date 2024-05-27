import Logo from "./Logo";
import Counter from "./Counter";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

const Header = () => {
	const { numberOfItemsPacked, items } = useContext(ItemsContext);
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
