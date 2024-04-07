export interface CardCatalogData {
  image: string;
  alt: string;
  title: string;
  discount: string;
}

export interface CardNewData {
  image: string;
  alt: string;
  title: string;
  cashBack: string;
  background: string;
}

export interface QuestionsSelectData {
  title: string;
  subtitle: string;
  width?: string;
}

export interface FAQItem {
  question?: string;
  answer?: string;
}

export interface HistoryContentPage {
  image: string;
  width?: string;
  height?: string;
  title?: string;
  text?: string;
  widthText?: string;
  widthsubTitle?: string;
  subtitle?: string;
  span?: string;
  faq?: FAQItem[];
  padding?: string;
  paddingContainer?: string;
  heightContainer?: string;
  paddingTopSubtitle?: string;
  paddingBottomTitle?: string;
}

export interface CardSellHistoryData {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  sum: string;
  cashBack?: string;
  period?: string;
}

export interface CardCatalogSubscriptionsData {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  sum: string;
  cashback: string;
  raiting: number;
  per: string;
}

export interface CardMySubscriptionsWaitActiveyData {
  image: string;
  alt: string;
  title: string;
  period: string;
}

export interface CardManageSubscriptionWaitIdCardData {
  image: string;
  alt: string;
  title: string;
  period: string;
  description: string;
}

export interface CardMySubscriptionsActiveData {
  image: string;
  alt: string;
  title: string;
  description?: string;
  period: string;
  sum: string;
  activeUntill: string;
  isActive?: boolean;
}

export interface CardManageSubscriptionData {
  image: string;
  alt: string;
  title: string;
  description: string;
  period: string;
  isActive?: boolean;
}

export interface BtnManageSubscriptionData {
  image: string;
  alt: string;
  title: string;
  borderColor?: string;
}

export interface CardAutopaymentData {
  image: string;
  alt: string;
  number?: string;
  title: string;
}

export interface ServiceSubscribeIcon {
  activation_status: boolean;
  image: string;
  nearest_payment_date: string | null;
  next_payment_amount: number | null;
}
