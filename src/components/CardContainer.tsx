import React from "react";
import PrincipleCard from "./PrincipleCard";
import { ConfigConsumer, ConfigConsumerProps } from "antd/es/config-provider";
import LocaleReceiver from "antd/es/locale-provider/LocaleReceiver";

interface State {
  checked: Array<number>;
}

export class CardContainer extends React.Component<{}, State> {
  renderCards = (locale: any) => {
    const { descriptions, titles } = locale.principles;
    const card_count = descriptions.length;

    let cards = Array(card_count)
      .fill(undefined)
      .map((_, index) => (
        <PrincipleCard
          index={index}
          title={titles[index]}
          desc={descriptions[index]}
        ></PrincipleCard>
      ));
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
