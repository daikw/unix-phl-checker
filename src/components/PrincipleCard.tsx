import React from "react";
import { Card, Icon } from "antd";

const { Meta } = Card;

const gridStyle = {
  width: "80%",
  margin: "15px"
};

interface Props {
  index: number;
  title: string;
  desc: string;
}

interface State {
  checked: boolean;
}

class PrincipleCard extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleClick = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <Card style={gridStyle} hoverable>
          <Meta
            title={
              <div>
                <Icon
                  type="check-circle"
                  theme="twoTone"
                  twoToneColor="#52c41a"
                  style={{
                    float: "right",
                    margin: "0 5px",
                    visibility: this.state.checked ? "unset" : "hidden"
                  }}
                />
                <span>{this.props.title}</span>
              </div>
            }
            description={this.props.desc}
            key={"card-" + String(this.props.index)}
          />
        </Card>
      </div>
    );
  }
}

export default PrincipleCard;
