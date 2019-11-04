import React from "react";
import { Icon, Card } from "antd";
const { Meta } = Card;

function shorten(desc: string) {
  return (
    desc
      .split(" ")
      .slice(0, 3)
      .join(" ") + " ..."
  );
}

interface ICardContainerProps {
  titles: Array<string>;
  descriptions: Array<string>;
}

interface ICardContainerState {
  checked: Array<number>;
}

class CardContainer extends React.Component<
  ICardContainerProps,
  ICardContainerState
> {
  render() {
    const gridStyle = {
      width: "25%",
      margin: "15px"
    };

    let gridList = Array(1)
      .fill(undefined)
      .map((_, index) => (
        <Card style={gridStyle} hoverable>
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
        </Card>
      ));

    return <Card title="Card Title">{gridList}</Card>;
  }
}

export default CardContainer;
