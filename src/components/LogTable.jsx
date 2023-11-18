import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{
		field: "id",
		headerName: "ID",
		minWidth: 55,
		maxWidth: 80,
		flex: 1,
		padding: 3,
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

const rows = [
	{
		id: 1,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 2,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 3,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 4,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 5,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 6,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 7,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 8,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 9,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
	{
		id: 10,
		level: "error",
		message: "Failed to connect to DB",
		resourceId: "server-1234",
		timestamp: "2023-09-15T08:00:00Z",
		traceId: "abc-xyz-123",
		spanId: "span-456",
		commit: "5e5342f",
		metadata: "server-0987",
	},
];

export default function LogTable() {
	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
				disableColumnMenu={true}
				disableRowSelectionOnClick
				sx={{
					"& .MuiDataGrid-cell[data-field='id']": {
						padding: 3,
					},
				}}
			/>
		</div>
	);
}
