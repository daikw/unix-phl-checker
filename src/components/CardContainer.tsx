import React from "react";
import { ConfigConsumer, ConfigConsumerProps } from "antd/es/config-provider";
import LocaleReceiver from "antd/es/locale-provider/LocaleReceiver";

import PrincipleCard from "./PrincipleCard";
import { CardContainerLocale } from "../custom_locale/_utils";

interface Props {
  category: string;
}

export class CardContainer extends React.Component<Props, {}> {
  getPrinciples = (locale: CardContainerLocale) => {
    switch (this.props.category) {
      case "main":
        return locale.main_principles;
      case "sub":
        return locale.sub_principles;
      default:
        return locale.main_principles;
    }
  };

  // any but locale should be CardContainerLocale
  renderCards = (locale: any) => {
    const { descriptions, titles } = this.getPrinciples(locale);
    const card_count = descriptions.length;

    let cards = Array(card_count)
      .fill(undefined)
      .map((_, index) => (
        <PrincipleCard
          index={index}
          title={titles[index]}
          desc={descriptions[index]}
          key={"pcard-" + String(index)}
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
