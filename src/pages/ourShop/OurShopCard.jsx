import { useContext } from "react";
import PrimaryButton from "../../Components/PrimaryButton";
import { AuthContext } from "../../providers/AuthProvider";
import usePublic from "../../hooks/usePublic";

const OurShopCard = ({food}) => {
  const axiosPublic = usePublic()
  const {user} = useContext(AuthContext)
  // console.log(user?.email)
    const {name, price, image, recipe, _id } = food
    const handleSingleFood = () =>{

      const foodData = {
        email: user?.email,
        foodId: _id,
        name,
        image,
        price
      }
      axiosPublic.post('/order', foodData)
      .then(res=>{
        console.log(res)
      })
      console.log(foodData)
    }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="">
    <img
      src={image}
      alt="food"
      className="" />
  </figure>
  <div className="card-body items-center text-center">
    <p className="absolute top-10 right-8 bg-black text-white px-3 py-2">{price}</p>
    <h2 className="card-title relative">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
        <button onClick={handleSingleFood}>
          
        <PrimaryButton title="Add to Cart"></PrimaryButton>
        </button>
    </div>
  </div>
</div>
  );
};

export default OurShopCard;