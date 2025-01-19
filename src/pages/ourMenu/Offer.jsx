import { useState } from "react";
import MenuItem from "../shared/MenuItem";

const Offer = () => {
    const [menu, setMenu] = useState([])
      fetch("menu.json")
      .then(res=>res.json())
      .then(data=>{
        const popular = data.filter(item=> item.category === "popular");
        setMenu(popular)
        console.log(popular)
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

export default Offer;