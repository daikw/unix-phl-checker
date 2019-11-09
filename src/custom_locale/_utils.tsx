import { Locale } from "antd/es/locale-provider";

interface principleLocale {
  titles: Array<string>;
  descriptions: Array<string>;
}

export interface CardContainerLocale {
  main_principles: principleLocale;
  sub_principles: principleLocale;
}

export function withCustomLocale(
  locale: Locale,
  cardContainerLocale: CardContainerLocale
) {
  return { ...locale, ...{ CardContainer: cardContainerLocale } };
}
