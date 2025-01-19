import SectionEnding from "../../Components/SectionEnding";
import SectionHeading from "../../Components/SectionHeading";
import Banner from "./Banner";
import Dessert from "./Dessert";
import DessertMenu from "./DessertMenu";
import Offer from "./Offer";
import Pizza from "./Pizza";
import PizzaMenu from "./PizzaMenu";
import Salad from "./Salad";
import SaladMenu from "./SaladMenu";
import Soup from "./Soup";
import SoupMenu from "./SoupMenu";

const OurMenu = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading title="Don't miss"
      heading="TODAY'S OFFER">
      </SectionHeading>
      <Offer></Offer>
      <SectionEnding title="ORDER YOUR FAVOURITE FOOD"></SectionEnding>
      <Dessert></Dessert>
      <DessertMenu></DessertMenu>
      <SectionEnding title="ORDER YOUR FAVOURITE FOOD"></SectionEnding>
      <Pizza></Pizza>
      <PizzaMenu></PizzaMenu>
      <SectionEnding title="ORDER YOUR FAVOURITE FOOD"></SectionEnding>
      <Salad></Salad>
      <SaladMenu></SaladMenu>
      <SectionEnding title="ORDER YOUR FAVOURITE FOOD"></SectionEnding>
      <Soup></Soup>
      <SoupMenu></SoupMenu>
      <SectionEnding title="ORDER YOUR FAVOURITE FOOD"></SectionEnding>
    </div>
  );
};

export default OurMenu;