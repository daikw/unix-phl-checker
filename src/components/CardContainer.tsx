import React from "react";
import { Icon, Card } from "antd";
import PrincipleCard from "./PrincipleCard";
import { ConfigConsumer, ConfigConsumerProps } from "antd/es/config-provider";
import LocaleReceiver from "antd/es/locale-provider/LocaleReceiver";

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

export class CardContainer extends React.Component<Props, State> {
  renderCard = (index: number, title: string, desc: string) => {
    const gridStyle = {
      width: "80%",
      margin: "15px"
    };

    return (
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
              <span>{title}</span>
            </div>
          }
          description={shorten(desc)}
          key={"card-" + String(index)}
        />
      </PrincipleCard>
    );
  };

  renderCards = (locale: any) => {
    const { descriptions, titles } = locale.principles;
    let cards = Array(2)
      .fill(undefined)
      .map((_, index) =>
        this.renderCard(index, titles[index], descriptions[index])
      );
    return <div>{cards}</div>;
  };

  renderCardContainer = (_: ConfigConsumerProps) => {
    return (
      <LocaleReceiver componentName="CardContainer">
        {this.renderCards}
      </LocaleReceiver>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderCardContainer}</ConfigConsumer>;
  }
}
