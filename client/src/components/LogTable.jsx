import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getLogs, addLogs } from "../utils";
const columns = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 55,
    maxWidth: 80,
    flex: 1,
  },
  { field: "level", headerName: "Level", minWidth: 60, maxWidth: 150, flex: 1 },
  { field: "message", headerName: "Message", minWidth: 180, flex: 1 },
  { field: "resourceId", headerName: "Resource ID", minWidth: 100, flex: 1 },
  { field: "timestamp", headerName: "Timestamp", minWidth: 100, flex: 1 },
  { field: "traceId", headerName: "Trace ID", minWidth: 100, flex: 1 },
  { field: "spanId", headerName: "Span ID", minWidth: 80, flex: 1 },
  { field: "commit", headerName: "Commit", minWidth: 80, flex: 1 },
  { field: "metadata", headerName: "metadata", minWidth: 100, flex: 1 },
];

export default function LogTable({ logs, setLogs, handleData }) {
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="h-[400px] w-[100%]">
      <DataGrid
        rows={logs}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableColumnMenu={true}
        disableRowSelectionOnClick
      />
    </div>
  );
}
