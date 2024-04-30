import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, photo, quantity, supplier, taste, details, category } = data;
  return (
    <div className="flex items-center w-9/12 mx-auto my-20 bg-[#F4F3F0] px-20 py-10 gap-3">
      <div>
        <img className="w-80" src={photo} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-medium drop-shadow-2xl font-rancho py-2">
          Niceties
        </h1>
        <div className="font-raleway">
          <div>
            <span className="font-semibold">Name: </span>
            <span>{name}</span>
          </div>
          <div>
            <span className="font-semibold">Quantity: </span>
            <span>{quantity}</span>
          </div>
          <div>
            <span className="font-semibold">Supplier: </span>
            <span>{supplier}</span>
          </div>
          <div>
            <span className="font-semibold">Category: </span>
            <span>{category}</span>
          </div>
          <div className="max-w-md">
            <span className="font-semibold">Taste: </span>
            <span>{taste}</span>
          </div>
          <div className="max-w-md">
            <span className="font-semibold">Details: </span>
            <span>{details}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
