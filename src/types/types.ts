export enum SelectedPage {
  Home = "home",
  Benefit = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icons: JSX.Element;
  title: string;
  description: string;
}