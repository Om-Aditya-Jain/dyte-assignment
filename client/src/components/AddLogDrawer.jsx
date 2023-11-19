import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { addLogs } from "../utils";
export default function AddLogDrawer({ state, setState, handleData }) {
  const [formData, setFormData] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: "",
    traceId: "",
    spanId: "",
    commit: "",
    metadata: "",
  });
  const updateFormData = (event) => {
    const { value, name } = event.target;
    setFormData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const submitFormData = () => {
    addLogs({
      ...formData,
      metadata: { parentResourceId: formData.metadata },
    });
    setState(false);
    handleData();
  };

  return (
    <Drawer anchor={"right"} open={state}>
      <Box sx={{ width: 400 }} role="presentation">
        <CloseRoundedIcon
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setState(false)}
        />
        <div className="p-5">
          <h1 className="text-3xl mb-2 text-center">Add Logs</h1>
          <p className="text-lg">Enter log details ...</p>
          <div className="flex flex-col text-md mt-3">
            <label htmlFor="level" className="font-bold">
              Level
            </label>
            <input
              type="text"
              name="level"
              value={formData.level}
              placeholder="Enter level"
              onChange={updateFormData}
            />
          </div>
          <Divider />
          <div className="flex flex-col text-md mt-3">
            <label htmlFor="message" className="font-bold">
              Message
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              placeholder="Enter message"
              onChange={updateFormData}
            />
          </div>
          <Divider />
          <div className="flex flex-col text-md mt-3">
            <label htmlFor="resourceId" className="font-bold">
              Resource Id
            </label>
            <input
              type="text"
              name="resourceId"
              value={formData.resourceId}
              placeholder="Enter resource id"
              onChange={updateFormData}
            />
          </div>
          <Divider />
          <div className="flex flex-col text-md mt-3">
            <label htmlFor="timestamp" className="font-bold">
              Timestamp
            </label>
            <input
              type="text"
              name="timestamp"
              value={formData.timestamp}
              placeholder="Enter timestamp"
              onChange={updateFormData}
            />
          </div>
          <Divider />
          <div className="flex flex-col text-md mt-3">
            <label htmlFor="traceId" className="font-bold">
              Trace Id
            </label>
            <input
              type="text"
              name="traceId"
              value={formData.traceId}
              placeholder="Enter trace id"
              onChange={updateFormData}
            />
          </div>
          <Divider />
          <div className="flex flex-col text-md mt-3">
            <label htmlFor="spanId" className="font-bold">
              Span Id
            </label>
            <input
              type="text"
              name="spanId"
              value={formData.spanId}
              placeholder="Enter span id"
              onChange={updateFormData}
            />
          </div>
          <Divider />
          <div className="flex flex-col text-md mt-3">
            <label htmlFor="commit" className="font-bold">
              Commit
            </label>
            <input
              type="text"
              name="commit"
              value={formData.commit}
              placeholder="Enter commit"
              onChange={updateFormData}
            />
          </div>
          <Divider />
          <div className="flex flex-col text-md mt-3">
            <label htmlFor="metadata" className="font-bold">
              Metadata
            </label>
            <input
              type="text"
              name="metadata"
              value={formData.metadata.parentResourceId}
              placeholder="Enter metadata"
              onChange={updateFormData}
            />
          </div>
          <Divider />
          <br />
          <Button variant="contained" onClick={submitFormData}>
            Submit
          </Button>
        </div>
      </Box>
    </Drawer>
  );
}
