import OurShopCard from "./OurShopCard";
const OurShopTab = ({food}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
    {
      food.map((food)=><OurShopCard
      food={food}
      ></OurShopCard>)
    }
  </div>
  );
};

export default OurShopTab;