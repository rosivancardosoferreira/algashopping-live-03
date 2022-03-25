import { createStore, combineReducers } from "redux";
import CalculatorReducer from "./Calculator/Calculator.reducer";

const rootReducer = combineReducers({
    calculator : CalculatorReducer,
    // products : ProductsReducer, //example
})

const store = createStore(rootReducer);

export default store