import NavBar from "./NavBar";


const HeroSection = () => {
    return <div className="relative overflow-clip h-full  bg-[#0A2640]">
        <img className="absolute w-[777px] h-[523px] z-0 top-[-0rem] right-[-10rem]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692999087/boldo/Ellipse_9_1_vvhdas.png" />
        <NavBar />
        <div className="flex flex-col ">
            <div className="flex mt-10 ml-4">
                <div className="flex-1 flex flex-col justify-center items-center gap-8">
                    <div className="text-white px-16">
                        <h2 className="font-manrope text-5xl leading-[72px] mb-5">Save time by building  fast with Boldo Template </h2>
                        <p className="text-base font-normal font-openSans leading-7">Funding handshake buyer business-to-business metrics iPad partnership.<br />
                            First mover advantage innovator success deployment non-disclosure.</p>
                    </div>
                    <div className="flex justify-start items-center ml-32 gap-5 w-full font-openSans">
                        <button className="bg-[#69E6A6] text-[#0A2640] py-4 px-14 font-bold text-xl rounded-full">Buy template</button>
                        <button className="bg-[#0A2640] text-white border-2 border-white py-4 px-14 font-bold text-xl rounded-full
                            hover:text-[#0A2640] hover:bg-white duration-300 ease-linear">Explore</button>
                    </div>
                </div>
                <div className="flex-1 z-10 flex items-center justify-center">
                    <img className="w-[493.86px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692886443/boldo/hero_graphics_dfka9j.png" alt="hero images" />
                </div>
            </div>
            <div className="relative w-full">
            <div className=" bg-gradient-to-r  from-[#0A2640]  z-20 h-16  w-[12rem] absolute top-16 left-[10%] " />
                <div className=" bg-gradient-to-l  from-[#0A2640]  z-20 h-16  w-[12rem] absolute top-16 right-[10%] " />
            <div className="relative cursor-pointer flex gap-10 w-[80%]  justify-center overflow-x-scroll scrollbar-hide items-center mx-auto py-20">
                <img className="w-[146.51px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png" alt="boldo" />
                <img className="w-[146.51px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png" alt="presto" />
                  <img className="w-[146.51px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png" alt="boldo" />
                <img className="w-[146.51px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png" alt="presto" />
                <img className="w-[146.51px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png" alt="boldo" />
                <img className="w-[146.51px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png" alt="presto" />
                <img className="w-[146.51px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png" alt="boldo" />
                <img className="w-[146.51px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png" alt="presto" />
            </div>
            </div>
        </div>
    </div>;
};

export default HeroSection;
