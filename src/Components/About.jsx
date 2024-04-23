import { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/about")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  return (
    <div className="bg-[#ECEAE3] py-5 ">
      <div className="flex justify-around items-center gap-8 w-10/12 mx-auto">
        {data.map((item) => (
          <div className="" key={item._id}>
            <img src={item.image} alt="" />
            <h1 className="font-rancho font-semibold py-2 text-xl">{item.title}</h1>
            <p className="font-raleway text-sm max-w-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
