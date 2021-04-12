import { createStore } from "vuex";
import TodoSliceStore from './TodoSliceStore';

const store = createStore({});

// tslint:disable-next-line:no-unused-expression
export const todoSliceStore = new TodoSliceStore({ store, name: "todosStore" });

export default store;