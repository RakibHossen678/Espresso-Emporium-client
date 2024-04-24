import img1 from '../assets/cups/Rectangle 9.png'
import img2 from '../assets/cups/Rectangle 10.png'
import img3 from '../assets/cups/Rectangle 11.png'
import img4 from '../assets/cups/Rectangle 12.png'
import img5 from '../assets/cups/Rectangle 13.png'
import img6 from '../assets/cups/Rectangle 14.png'
import img7 from '../assets/cups/Rectangle 15.png'
import img8 from '../assets/cups/Rectangle 16.png'

const Follow = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="text-center">
        <h1 className="font-raleway py-1">Follow Us Now</h1>
        <p className="font-rancho text-4xl font-semibold pt-4 pb-12 drop-shadow-2xl text-[#331A15]">Follow on Instagram</p>
      </div>
      <div className='grid gap-6 mb-10 lg:grid-cols-4 grid-cols-2'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </div>
  );
};

export default Follow;
