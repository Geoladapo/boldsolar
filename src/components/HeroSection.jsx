import NavBar from "./NavBar";


const HeroSection = () => {
    return <div className="h-screen  bg-[#0A2640]">
        <NavBar />
        <div className="flex flex-col ">
            <div className="flex mt-10">
                <div className="flex-1 flex flex-col justify-center items-center gap-8">
                    <div className="text-white px-16">
                        <h2 className="font-manrope text-5xl leading-[72px] mb-5">Save time by building  fast with Boldo Template </h2>
                        <p className="text-base font-normal font-openSans leading-7">Funding handshake buyer business-to-business metrics iPad partnership.<br/>
                         First mover advantage innovator success deployment non-disclosure.</p>
                    </div>
                    <div className="flex justify-start items-center ml-32 gap-5 w-full font-openSans">
                        <button className="bg-[#69E6A6] text-[#0A2640] py-4 px-14 font-bold text-xl rounded-full">Buy template</button>
                        <button className="bg-[#0A2640] text-white border-2 border-white py-4 px-14 font-bold text-xl rounded-full">Explore</button>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
            <img className="w-[493.86px]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692886443/boldo/hero_graphics_dfka9j.png" alt="hero images" />
                </div>
            </div>
            <div></div>
        </div>
    </div>;
};

export default HeroSection;
