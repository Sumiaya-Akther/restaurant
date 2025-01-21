import useMenu from "../../hooks/useMenu";
import MenuItem from "../shared/MenuItem";

const DessertMenu = () => {
        const [menu] =  useMenu()
        const dessert = menu.filter(item=> item.category === "dessert");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12 max-w-7xl mx-auto">
    {dessert.map(item=>
     <MenuItem
     key={item._id}
     item={item}
     ></MenuItem>
    )}
     </div>
  );
};

export default DessertMenu;