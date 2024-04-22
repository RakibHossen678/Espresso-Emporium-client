const CofeeCard = ({ coffee }) => {
  const { name, photo, supplier, quantity } = coffee;
  return (
    <div className=" p-8 flex items-center sm:space-x-6 bg-[#F5F4F1]  ">
      <div className="flex-shrink-0 w-full mb-6 h-48 sm:h-36 sm:w-32 sm:mb-0">
        <img
          src={photo}
          alt=""
          className="object-cover object-center w-full h-full rounded bg-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className=" font-raleway py-1">
            <span className="font-semibold ">Name:</span> {name}
          </h2>
          <h2 className="font-raleway py-1">
            <span className="font-semibold ">Chef:</span> {supplier}
          </h2>
          <h2 className="font-raleway py-1">
            <span className="font-semibold ">Qunanity:</span> {supplier}
          </h2>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className=" font-raleway py-1">
            <span className="font-semibold ">Name:</span> {name}
          </h2>
          <h2 className="font-raleway py-1">
            <span className="font-semibold ">Chef:</span> {supplier}
          </h2>
          <h2 className="font-raleway py-1">
            <span className="font-semibold ">Qunanity:</span> {supplier}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CofeeCard;
