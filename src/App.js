import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header";
import CoHead from "./component/content/Contents/ContentHeader";


export default function App() {
  return (
    <React.Fragment>
        <Header />
        <CoHead />
    </React.Fragment>
  );
}
