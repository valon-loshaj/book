import { ActionType } from "../action-types";
import { CellTypes } from "../cell";

interface MoveCellAction {
	type: ActionType.MOVE_CELL;
	payload: {
		id: string;
		direction: "up" | "down";
	};
}

interface DeleteCellAction {
	type: ActionType.DELETE_CELL;
	payload: {
		id: string;
	};
}

interface InsertCellBeforeAction {
	type: ActionType.INSERT_CELL_BEFORE;
	payload: {
		id: string;
		type: CellTypes;
	};
}

interface InsertCellAfterAction {
	type: ActionType.INSERT_CELL_AFTER;
	payload: {
		id: string;
		type: "code" | "text";
	};
}

interface UpdateCellAction {
	type: ActionType.UPDATE_CELL;
	payload: {
		id: string;
		content: string;
	};
}

export type Action =
	| MoveCellAction
	| DeleteCellAction
	| InsertCellBeforeAction
	| InsertCellAfterAction
	| UpdateCellAction;
