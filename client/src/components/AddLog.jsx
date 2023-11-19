import React, { useState } from "react";
import Button from "@mui/material/Button";
const AddLog = () => {
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

	const onsubmits = (event) => {
		event.preventDefault();
		console.log(formData);
	};

	const updateFormData = (event) => {
		const { value, name } = event.target;
		setFormData((prevalue) => {
			return {
				...prevalue,
				[name]: value,
			};
		});
	};

	return (
		<form onSubmit={onsubmits} className="flex-col w-[50%]">
			<div className="p-5">
				<h1 className="text-4xl p-4 text-center">Add Logs</h1>
				<p className="text-lg mb-5">Enter log details ...</p>
				<div className="flex gap-3 text-lg">
					<label htmlFor="level" className="font-bold">
						Level
					</label>
					<input
						type="text"
						className=" pl-3"
						name="level"
						value={formData.level}
						placeholder="Enter level"
						onChange={updateFormData}
					/>
				</div>
				<br />
				<div className="flex gap-3 text-lg">
					<label htmlFor="message" className="font-bold">
						Message
					</label>
					<input
						type="text"
						className=" pl-3"
						name="message"
						value={formData.message}
						placeholder="Enter message"
						onChange={updateFormData}
					/>
				</div>
				<br />
				<div className="flex gap-3 text-lg">
					<label htmlFor="resourceId" className="font-bold">
						Resource Id
					</label>
					<input
						type="text"
						className=" pl-3"
						name="resourceId"
						value={formData.resourceId}
						placeholder="Enter resource id"
						onChange={updateFormData}
					/>
				</div>
				<br />
				<div className="flex gap-3 text-lg">
					<label htmlFor="timestamp" className="font-bold">
						Timestamp
					</label>
					<input
						type="text"
						className=" pl-3"
						name="timestamp"
						value={formData.timestamp}
						placeholder="Enter timestamp"
						onChange={updateFormData}
					/>
				</div>
				<br />
				<div className="flex gap-3 text-lg">
					<label htmlFor="traceId" className="font-bold">
						Trace Id
					</label>
					<input
						type="text"
						className=" pl-3"
						name="traceId"
						value={formData.traceId}
						placeholder="Enter trace id"
						onChange={updateFormData}
					/>
				</div>
				<br />
				<div className="flex gap-3 text-lg">
					<label htmlFor="spanId" className="font-bold">
						Span Id
					</label>
					<input
						type="text"
						className=" pl-3"
						name="spanId"
						value={formData.spanId}
						placeholder="Enter span id"
						onChange={updateFormData}
					/>
				</div>
				<br />
				<div className="flex gap-3 text-lg">
					<label htmlFor="commit" className="font-bold">
						Commit
					</label>
					<input
						type="text"
						className=" pl-3"
						name="commit"
						value={formData.commit}
						placeholder="Enter commit"
						onChange={updateFormData}
					/>
				</div>
				<br />
				<div className="flex gap-3 text-lg">
					<label htmlFor="metadata" className="font-bold">
						Metadata
					</label>
					<input
						type="text"
						className="pl-3"
						name="metadata"
						value={formData.metadata.parentResourceId}
						placeholder="Enter metadata"
						onChange={updateFormData}
					/>
				</div>
				<br />
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</div>
		</form>
	);
};

export default AddLog;
