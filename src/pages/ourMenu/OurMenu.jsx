
import SectionHeading from "../../Components/SectionHeading";
import useMenu from "../../hooks/useMenu";
import CoverPage from "./CoverPage";
import MenuCategory from "./MenuCategory";
import bannerImg from "../../assets/home/chef-service.jpg";
import coverImg from "../../assets/menu/banner3.jpg";
import PrimaryButton from "../../Components/PrimaryButton";

const OurMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item=> item.category === "popular");
  const dessert = menu.filter(item=> item.category === "dessert");
  const pizza = menu.filter(item=> item.category === "pizza");
  const salad = menu.filter(item=> item.category === "salad");
  const soup = menu.filter(item=> item.category === "soup");
  console.log(popular, dessert, pizza, salad, soup )
  return (
    <div>
      <CoverPage
        title="Our Menu"
        bannerImg={coverImg}>
      </CoverPage>
      <SectionHeading title="Don't miss"
      heading="TODAY'S OFFER">
      </SectionHeading>
      <MenuCategory
      item={popular}>
      </MenuCategory>
      <MenuCategory
      title="Dessert"
      bannerImg={bannerImg}
      item={dessert}>
      </MenuCategory>
      <MenuCategory
      title="Pizza"
      bannerImg={bannerImg}
      item={pizza}>
      </MenuCategory>
      <MenuCategory
      title="Salad"
      bannerImg={bannerImg}
      item={salad}>
      </MenuCategory>
      <MenuCategory
      title="Soups"
      bannerImg={bannerImg}
      item={soup}>
      </MenuCategory>
    </div>
  );
};

export default OurMenu;