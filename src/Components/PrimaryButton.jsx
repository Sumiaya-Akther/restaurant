
const PrimaryButton = ({title}) => {
  return (
    <div className="flex justify-center my-10">
     <button className="btn outline-none border-b-4 border-b-rose-400 hover:bg-rose-400 upercase">{title}</button>
    </div>
  );
};

export default PrimaryButton;