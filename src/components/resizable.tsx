import "./resizable.css";
import { ResizableBox, ResizeHandle } from "react-resizable";
import "./resizable.css";

interface ResizableProps {
	direction: "horizontal" | "vertical";
	children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
	const resizeHandles: ResizeHandle[] = ["s"];
	return (
		<ResizableBox
			height={300}
			width={Infinity}
			resizeHandles={resizeHandles}
		>
			{children}
		</ResizableBox>
	);
};

export default Resizable;
