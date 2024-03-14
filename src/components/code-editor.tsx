import { useRef } from "react";
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import "./code-editor.css";

interface CodeEditorProps {
	initialValue: string;
	theme: "dark" | "light";
	onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
	onChange,
	initialValue,
	theme,
}) => {
	const editorRef = useRef<any>();
	const onEditorDidMount: EditorDidMount = (
		getValue: () => string,
		monacoEditor
	) => {
		editorRef.current = monacoEditor;
		monacoEditor.onDidChangeModelContent(() => {
			setTimeout(() => {
				onChange(getValue());
			}, 0);
		});
	};

	const onFormatClick = () => {
		const unformatted = editorRef.current.getModel().getValue();
		const fromatted = prettier
			.format(unformatted, {
				parser: "babel",
				plugins: [parser],
				useTabs: true,
				semi: true,
				singleQuote: true,
			})
			.replace(/\n$/, "");
		editorRef.current.setValue(fromatted);
	};

	return (
		<div className='editor-wrapper'>
			<button
				className='button button-format is-primary is-small'
				onClick={onFormatClick}
			>
				Format
			</button>
			<MonacoEditor
				editorDidMount={onEditorDidMount}
				value={initialValue}
				theme={theme}
				language='javascript'
				height='100%'
				options={{
					wordWrap: "on",
					minimap: { enabled: false },
					showUnused: false,
					folding: false,
					lineNumbersMinChars: 3,
					fontSize: 16,
					scrollBeyondLastLine: false,
					automaticLayout: true,
				}}
			/>
		</div>
	);
};

export default CodeEditor;
