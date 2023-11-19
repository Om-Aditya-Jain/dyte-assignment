import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LogTable from "./components/LogTable";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import AddLog from "./components/AddLog";
import Drawer from "@mui/material/Drawer";
import { Add } from "@mui/icons-material";

import AddLogDrawer from "./components/AddLogDrawer";
import "./App.css";
import { getLogs } from "./utils";

function App() {
  const [logs, setLogs] = useState([]);
  const [isAddLog, setIsAddLog] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  async function handleData() {
    const data = await getLogs();
    console.log(data);
    setLogs(data);
  }
  return (
    <>
      <Navbar
        isAddLog={isAddLog}
        setIsAddLog={setIsAddLog}
        isFilter={isFilter}
        setIsFilter={setIsFilter}
        handleData={handleData}
      />
      <div className="pt-[60px] w-full bg-neutral-200 min-h-screen">
        {isFilter && <Filter setLogs={setLogs} />}
        <div className="w-[90%] rounded m-auto mt-[2rem] bg-white">
          <LogTable logs={logs} setLogs={setLogs} handleData={handleData} />
          <AddLogDrawer
            state={isAddLog}
            setState={setIsAddLog}
            handleData={handleData}
          />
        </div>
      </div>
    </>
  );
}

export default App;
