import { useState } from "react";
import MenuItem from "../shared/MenuItem";

const SoupMenu = () => {
     const [menu, setMenu] = useState([])
          fetch("menu.json")
          .then(res=>res.json())
          .then(data=>{
            const soup = data.filter(item=> item.category === "soup");
            setMenu(soup)
            console.log(soup)
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

export default SoupMenu;