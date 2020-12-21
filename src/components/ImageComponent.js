import React from "react";

import logo from "../logo.svg";

class ImageComponent extends React.Component {
  render() {
    return <img src={logo} width="100px"></img>;
  }
}

export default ImageComponent;
