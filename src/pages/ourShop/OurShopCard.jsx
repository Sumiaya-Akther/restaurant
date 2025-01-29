import PrimaryButton from "../../Components/PrimaryButton";

const OurShopCard = ({food}) => {
    const {name, price, image, recipe, _id } = food
    const hendleSingleFood = (id) =>{
      console.log(id)
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
        <button onClick={()=>hendleSingleFood(_id)}>
          
        <PrimaryButton title="Add to Cart"></PrimaryButton>
        </button>
    </div>
  </div>
</div>
  );
};

export default OurShopCard;