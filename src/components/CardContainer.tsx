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
    const principles = this.getPrinciples(locale);
    const card_count = principles.length;

    let cards = Array(card_count)
      .fill(undefined)
      .map((_, index) => (
        <PrincipleCard
          index={index}
          title={principles[index].title}
          desc={principles[index].description}
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
