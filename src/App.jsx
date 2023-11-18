import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LogTable from "./components/LogTable";
import Navbar from "./components/Navbar";
import AddLog from "./components/AddLog";

// import "./App.css";

function App() {
	const [isAddLog, setIsAddLog] = useState(false);
	return (
		<>
			<Navbar isAddLog={isAddLog} setIsAddLog={setIsAddLog} />
			<div className="pt-[60px] w-full bg-neutral-200 min-h-screen">
				<div className="w-[90%] rounded m-auto flex justify-center mt-[2rem] bg-white">
					{isAddLog ? <AddLog /> : <LogTable />}
				</div>
			</div>
		</>
	);
}

export default App;
