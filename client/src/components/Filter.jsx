import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { filterLogs } from "../utils";
const Filter = ({ setLogs }) => {
  const [filter, setFilter] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: "",
    traceId: "",
    spanId: "",
    commit: "",
  });
  const updateFilter = (event) => {
    const { value, name } = event.target;
    setFilter((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
    console.log(filter);
  };
  const applyFilter = async () => {
    console.log("filter");
    const data = await filterLogs(filter);
    setLogs(data);
  };
  return (
    <div className="w-screen bg-white flex gap-4 flex-wrap p-5 items-center">
      <TextField
        label="Level"
        variant="outlined"
        size="small"
        name="level"
        value={filter.level}
        onChange={updateFilter}
      />
      <TextField
        label="Message"
        variant="outlined"
        size="small"
        name="message"
        value={filter.message}
        onChange={updateFilter}
      />
      <TextField
        label="Resource Id"
        variant="outlined"
        size="small"
        name="resourceId"
        value={filter.resourceId}
        onChange={updateFilter}
      />
      <TextField
        label="Timestamp"
        variant="outlined"
        size="small"
        name="timestamp"
        value={filter.timestamp}
        onChange={updateFilter}
      />
      <TextField
        label="Trace Id"
        variant="outlined"
        size="small"
        name="traceId"
        value={filter.traceId}
        onChange={updateFilter}
      />
      <TextField
        label="Span Id"
        variant="outlined"
        size="small"
        name="spanId"
        value={filter.spanId}
        onChange={updateFilter}
      />
      <TextField
        label="Commit"
        variant="outlined"
        size="small"
        name="commit"
        value={filter.commit}
        onChange={updateFilter}
      />
      <Button variant="contained" color="success" onClick={applyFilter}>
        Apply
      </Button>
    </div>
  );
};

export default Filter;
