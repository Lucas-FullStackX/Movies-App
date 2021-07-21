import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// createStore recibe por parametro UN reducer
// en el caso de haber definido muchos reducers, antes de pasarselo al createStore
// debo hacer un combienReducer(reducer1, reducer2, ...); y luego pasarle el reducer combinado
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
