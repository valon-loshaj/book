import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

const customMiddleWare = (store) => (next) => (action) => {
	console.log("Middleware triggered:", action);
	next(action);
};

export default customMiddleWare;
