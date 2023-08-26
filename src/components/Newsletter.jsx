

const Newsletter = () => {
    return <div className="py-20  px-5 lg:px-20">
        <div className="relative bg-[#0A2640] rounded-xl overflow-clip px-1 lg:px-48 py-8 lg:py-20 gap-10 flex flex-col items-center justify-center">
            <img className="absolute  w-[800px] top-[-0rem] right-[-3rem] " src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692994342/boldo/Ellipse_9_jlncxz.png" />
            <h2 className=" z-10 text-white text-center font-manrope px-5 lg:px-10 text-3xl leading-10 lg:text-5xl lg:leading-[72px]">An enterprise template to ramp up your company website</h2>
            <div className="flex flex-col px-5 lg:flex-row items-center justify-center gap-8">
                <input className="w-fit rounded-full  px-7 pr-20 py-4 text-xl" placeholder="Your email address    " />
                <button className="rounded-full w-fit lg:w-full bg-[#69E6A6] text-[#0A2640] py-4 px-14 font-bold text-xl">Start now</button>
            </div>
        </div>
    </div>;
};

export default Newsletter;
