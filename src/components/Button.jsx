import React from "react";

const Button = ({ onClick, buttonType, children  }) => {
	return (
		<button onClick={onClick} className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}>
			{children}
		</button>
	);
};

export default Button;
