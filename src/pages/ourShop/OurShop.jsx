import CoverPage from "../ourMenu/CoverPage";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import OurShopCard from "./OurShopCard";
import OurShopTab from "./OurShopTab";


const OurShop = () => {
  const [menu] = useMenu()
  const drink = menu.filter(item=> item.category === "drinks");
  const dessert = menu.filter(item=> item.category === "dessert");
  const pizza = menu.filter(item=> item.category === "pizza");
  const salad = menu.filter(item=> item.category === "salad");
  const soup = menu.filter(item=> item.category === "soup");
  console.log(drink, dessert, pizza, salad, soup )
  return (
    <div>
      <CoverPage
      title="Our Shop"
      bannerImg={shopImg}
      ></CoverPage>
      <div>
      <Tabs className="max-w-7xl mx-auto">
    <TabList className="w-96 mx-auto">
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
      <OurShopTab
      food={salad}
      ></OurShopTab>
    </TabPanel>
    <TabPanel>
     <OurShopTab
        food={pizza}
     ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
        food={soup}
     ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
        food={dessert}
     ></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab
        food={drink}
     ></OurShopTab>
    </TabPanel>
  </Tabs>
      </div>
    </div>
  );
};

export default OurShop;