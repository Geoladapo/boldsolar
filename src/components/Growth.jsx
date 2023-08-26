

const Growth = () => {
    return <div className="flex justify-center flex-col lg:flex-row items-center mt-14 lg:mt-0 gap-32 py-10  mx-10 lg:mx-32">
        <div className=" flex flex-col gap-14 lg:gap-10 ">
            <h2 className=" font-manrope text-3xl lg:text-4xl  leading-9 lg:leading-[56px]">We connect our customers with the best, and help them keep up-and stay open.</h2>
            <ul className=" font-openSans w-fit text-base space-y-10 leading-6 lg:leading-[56px]">
                <li className="flex items-center w-fit  pl-5 lg:pr-28 pr-4 rounded-md py-3  lg:py-1 bg-[#0A2640] text-white ">
                    <img className="w-4 lg:w-6 mr-4" src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1692969752/boldo/feather_cg51tj.png"} />
                    We connect our customers with the best.</li>
                <li className="flex items-center w-full font-bold  pl-5 lg:pr-28 pr-4 rounded-md py-3  lg:py-1 bg-white drop-shadow-md  ">
                    <img className="w-4 lg:w-6 mr-4" src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1692969773/boldo/eye_w4lsml.png"} />
                    Advisor success customer launch party.</li>
                <li className="flex items-center w-full font-bold  pl-5 lg:pr-28 pr-4 rounded-md py-3  lg:py-1 bg-white drop-shadow-md  ">
                    <img className="w-4 lg:w-6 mr-4" src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1692969776/boldo/sun_zpsqcu.png"} />
                    Business-to-consumer long tail.</li>
            </ul>
        </div>
        <div>
            <img className="w-[70rem]" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692969384/boldo/Group_281_ievqeq.png" alt="woman" />
        </div>
    </div>;
};

export default Growth;
