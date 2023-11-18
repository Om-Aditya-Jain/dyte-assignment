import React from "react";
import Button from "@mui/material/Button";
const Navbar = ({ isAddLog, setIsAddLog }) => {
	return (
		<div className="w-full h-[60px] fixed shadow-sm p-6 bg-white z-10 flex justify-between items-center text-lg">
			Dyte Assignment
			{isAddLog ? (
				<Button variant="contained" onClick={() => setIsAddLog(!isAddLog)}>
					View Logs
				</Button>
			) : (
				<Button variant="contained" onClick={() => setIsAddLog(!isAddLog)}>
					Add Logs
				</Button>
			)}
		</div>
	);
};

export default Navbar;
