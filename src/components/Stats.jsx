import tick from "../assets/Group 210.png"
const Stats = () => {
  return <div className="flex justify-center items-center gap-32 py-10 mx-32">
    <div className="">
    <img className="w-[70rem]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692918393/boldo/Group_216_qo43ri.png" alt="man" />
    </div>
    <div className=" flex flex-col gap-10 ">
        <h2 className=" font-manrope text-4xl leading-[56px]">We connect our customers with the best, and help them keep up-and stay open.</h2>
        <ul className=" font-openSans text-xl leading-[56px]">
            <li className="flex items-center "><img className="w-9 mr-6" src={tick}/> We connect our customers with the best.</li>
            <li className="flex items-center "><img className="w-9 mr-6" src={tick}/>Advisor success customer launch party.</li>
            <li className="flex items-center "><img className="w-9 mr-6" src={tick}/>Business-to-consumer long tail.</li>
        </ul>
        <button className="rounded-full bg-[#0A2640] px-16 w-fit text-lg py-5 font-openSans text-white font-bold">Start now</button>
    </div>
  </div>;
};

export default Stats;
