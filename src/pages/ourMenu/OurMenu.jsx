import SectionHeading from "../../Components/SectionHeading";
import Banner from "./Banner";
import Dessert from "./Dessert";
import DessertMenu from "./DessertMenu";
import Offer from "./Offer";
import Pizza from "./Pizza";
import PizzaMenu from "./PizzaMenu";

const OurMenu = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading title="Don't miss"
      heading="TODAY'S OFFER">
      </SectionHeading>
      <Offer></Offer>
      <Dessert></Dessert>
      <DessertMenu></DessertMenu>
      <Pizza></Pizza>
      <PizzaMenu></PizzaMenu>
    </div>
  );
};

export default OurMenu;