import React from "react";
import ReactDOM from "react-dom";

import colorNames from "../utils/colorNames";
import shadeNumbers from "../utils/shadeNumbers";
import Nav from "./nav";
import Intro from "./intro";
import Instructions from "./instructions";
import ColorSwatches from "./colorSwatches";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorNames,
      shadeNumbers,
    };
  }
  render() {
    return (
      <>
        <Nav names={this.state.colorNames} />
        <Intro />
        <Instructions />
        <ColorSwatches
          names={this.state.colorNames}
          shadeNumbers={this.state.shadeNumbers}
        />
      </>
    );
  }
}
const app = document.getElementById("app");
app && ReactDOM.render(<Layout />, app);
