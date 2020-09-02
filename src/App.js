import React from "react";
import "./App.css";
import Form from "./Component/form/form";
import Form1 from "./Pages/Form1/form1";
import Number from "./Pages/Number/Number";

function App() {
  return (
    <div>
      <Form />
      <hr />
      <Form1 />
      <hr />
      <Number />
    </div>
  );
}

export default App;
