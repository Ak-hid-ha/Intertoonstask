import { createStore } from "redux";
import { Reducers } from "./productReducer";

export const mystore = createStore(Reducers);