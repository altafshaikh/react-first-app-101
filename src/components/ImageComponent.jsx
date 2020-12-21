import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.imageSrc} width="100px"></img>;
  }
}

export default ImageComponent;
