import PrimaryButton from "../../Components/PrimaryButton";
import MenuItem from "../shared/MenuItem";
import CoverPage from "./CoverPage";


const MenuCategory = ({item, title, bannerImg}) => {

  return (
    <div>
      <div>
       {
        title && <CoverPage
        title={title}
        bannerImg={bannerImg}
        ></CoverPage>
       }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-10">
        {
        item.map(food=><MenuItem
        item={(food)}>
        </MenuItem>)    
        }
      </div>
      <PrimaryButton
      title="order your favourite food"></PrimaryButton>
    </div>
  );
};

export default MenuCategory;