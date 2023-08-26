import tick from "../assets/Group 210.png"
const Stats = () => {
  return <div className="flex justify-center flex-col lg:flex-row items-center gap-16 lg:gap-32 py-10 mx-10 lg:mx-32">
    <div className="">
    <img className="w-[70rem]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692918393/boldo/Group_216_qo43ri.png" alt="man" />
    </div>
    <div className=" flex flex-col items-center lg:items-start gap-14 lg:gap-10 ">
        <h2 className=" font-manrope text-3xl leading-8 lg:text-4xl lg:leading-[56px]">We connect our customers with the best, and help them keep up-and stay open.</h2>
        <ul className=" font-openSans text-xl space-y-5 lg:space-y-0 leading-8 lg:leading-[56px]">
            <li className="flex lg:items-center items-start"><img className="lg:w-9 mt-2 w-6 mr-6" src={tick}/> We connect our customers with the best.</li>
            <li className="flex lg:items-center items-start"><img className="lg:w-9 mt-2 w-6 mr-6" src={tick}/>Advisor success customer launch party.</li>
            <li className="flex lg:items-center items-start"><img className="lg:w-9 mt-2 w-6 mr-6" src={tick}/>Business-to-consumer long tail.</li>
        </ul>
        <button className="rounded-full bg-[#0A2640] px-16 w-fit text-lg py-5 font-openSans text-white font-bold">Start now</button>
    </div>
  </div>;
};

export default Stats;
