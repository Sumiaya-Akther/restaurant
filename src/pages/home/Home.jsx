import SectionHeading from "../../Components/SectionHeading";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import Menu from "./Menu";
import SevenStar from "./SevenStar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading title="From 11:00am to 10:00pm"
      heading="ORDER ONLINE">
      </SectionHeading>
      <Category></Category>
      <SevenStar></SevenStar>
      <SectionHeading title="Check it out"
      heading="FROM OUR MENU">
      </SectionHeading>
      <Menu></Menu>
      <Contact></Contact>
    </div>
  );
};

export default Home;