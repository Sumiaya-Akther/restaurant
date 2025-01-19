import { useState } from "react";
import MenuItem from "../shared/MenuItem";

const SaladMenu = () => {
    const [menu, setMenu] = useState([])
      fetch("menu.json")
      .then(res=>res.json())
      .then(data=>{
        const salad = data.filter(item=> item.category === "salad");
        setMenu(salad)
        console.log(salad)
      })
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-12 max-w-7xl mx-auto">
    {menu.map(item=>
     <MenuItem
     key={item._id}
     item={item}
     ></MenuItem>
    )}
     </div>
  );
};

export default SaladMenu;