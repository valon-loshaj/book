import { useState, useEffect } from "react";
import CondeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";

const CodeCell = () => {
	const [input, setInput] = useState("");
	const [code, setCode] = useState("");
	const [err, setErr] = useState("");

	useEffect(() => {
		const timer = setTimeout(async () => {
			const output = await bundle(input);
			if (typeof output === "string") {
				setCode(output);
			} else {
				setCode(output.code);
				setErr(output.err);
			}
		}, 750);

		return () => {
			clearTimeout(timer);
		};
	}, [input]);

	return (
		<Resizable direction='vertical'>
			<div
				style={{
					height: "100%",
					display: "flex",
					flexDirection: "row",
				}}
			>
				<Resizable direction='horizontal'>
					<CondeEditor
						onChange={(value) => setInput(value)}
						initialValue='// 🤓 Lets get coding!'
						theme='dark'
					/>
				</Resizable>
				<Preview code={code} err={err} />
			</div>
		</Resizable>
	);
};

export default CodeCell;
