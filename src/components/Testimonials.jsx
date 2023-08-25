import { feedBack } from "../MockData/data";

const Testimonials = () => {
    return <div className="bg-[#0A2640] relative h-full px-32 py-20">
        <div className="flex items-center  mb-14 ">
        <h2 className="text-5xl font-manrope pr-[230px] text-start leading-[76px] w-fit text-white">An enterprise template to ramp up your company website</h2>
        <div className="flex items-center justify-center gap-5 m-2">
            <img className="bg-white p-3 w-16 rounded-full flex items-center justify-center" src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1692975819/boldo/arrow-right_1_bvkj1v.png"} />
            <img className="bg-white p-3 w-16 rounded-full flex items-center justify-center" src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1692979596/boldo/arrow-right_3_mubj0t.png"} />
        </div>
        </div>

        <div className="flex gap-5">
            {
                feedBack.map((card) => (
                    <div className='flex flex-col gap-10 items-start w-full h-fit bg-white p-10 rounded-xl drop-shadow-md ' key={card.id}>
                        <div>
                            <p className="font-openSans text-2xl leading-[36px] text-[#000000]">
                                {card.description}
                            </p>
                        </div>
                        <div className='flex items-center w-full  justify-centerfont-openSans gap-5'>
                            <img className="w-16" src={card.imgLink} />
                            <div className="flex font-openSans text-[#0A2640] flex-col">
                                <p className="font-bold text-base">{card.name}</p>
                                <p className="text-sm">{card.position} @ {card.company}</p>
                            </div>
                        </div>

                    </div>
                ))
            }

        </div>
    </div>;
};

export default Testimonials;
