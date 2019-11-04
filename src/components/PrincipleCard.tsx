import React from "react";
import { Card, Modal } from "antd";

class PrincipleCard extends Card {
  state = { visible: false };

  handleClick = () => {
    console.log("clicked!");
    this.showModal();
  };

  showModal = () => {
    console.log("updated!");
    console.log(this.state);
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        ></Modal>
        <div onClick={this.handleClick.bind(this)}>{super.render()}</div>
      </div>
    );
  }
}

export default PrincipleCard;
