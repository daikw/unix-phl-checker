import { Locale } from "antd/es/locale-provider";

interface principleLocale {
  id: number;
  title: string;
  description: string;
}

export interface CardContainerLocale {
  main_principles: Array<principleLocale>;
  sub_principles: Array<principleLocale>;
}

export function withCustomLocale(
  locale: Locale,
  cardContainerLocale: CardContainerLocale
) {
  return { ...locale, ...{ CardContainer: cardContainerLocale } };
}
