import React, { useState } from "react";
import "./style.css";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

function reducer(state, action) {
  if (state === undefined) {
    return {
      number: 1,
    };
  } else if (action.type === "PLUS") {
    return {
      ...state,
      number: state.number + 1,
    };
  }
}

const store = createStore(reducer);
export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({
      type: "PLUS",
    });
  };
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={onClick}></input>
    </div>
  );
}
