import React from "react";
import { Icon, Card } from "antd";
import PrincipleCard from "./PrincipleCard";
const { Meta } = Card;

function shorten(desc: string) {
  return (
    desc
      .split(" ")
      .slice(0, 3)
      .join(" ") + " ..."
  );
}

interface Props {
  titles: Array<string>;
  descriptions: Array<string>;
}

interface State {
  checked: Array<number>;
}

class CardContainer extends React.Component<Props, State> {
  render() {
    const gridStyle = {
      width: "25%",
      margin: "15px"
    };

    let gridList = Array(1)
      .fill(undefined)
      .map((_, index) => (
        <PrincipleCard style={gridStyle} hoverable>
          <Meta
            title={
              <div>
                <Icon
                  type="check-circle"
                  theme="twoTone"
                  twoToneColor="#52c41a"
                  style={{ float: "right", margin: "0 5px" }}
                />
                <span>{this.props.titles[index]}</span>
              </div>
            }
            description={shorten(this.props.descriptions[index])}
            key={"card-" + String(index)}
          />
        </PrincipleCard>
      ));

    return <Card title="Card Title">{gridList}</Card>;
  }
}

export default CardContainer;
