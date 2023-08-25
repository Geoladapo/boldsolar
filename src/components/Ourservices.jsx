import { services } from '../MockData/data';
import Arrow from "../assets/arrow-right.png"

const Ourservices = () => {

    return <div className="bg-white h-full py-20">
        <div className="flex flex-col items-center justify-center mb-20 ">
            <p className="font-openSans text-xl text-[#777777]">Our Services</p>
            <p className="font-manrope text-5xl leading-[72px] px-40 text-center">Handshake infographic mass market crowdfunding iteration.</p>
        </div>
        <div className='flex items-center justify-center px-16 '>
            {
                services.map((card) => (
                    <div className='flex flex-col w-fit ' key={card.id}>
                        <div className='flex items-center justify-center '>
                            <img className='w-[18rem]' src={card.imgLink} />
                        </div>

                        <div className='flex font-openSans flex-col items-start ml-14 gap-5 my-5'>
                            <h4 className='text-2xl text-st'>{card.title}</h4>
                            <p className='text-xl pr-20 text-star text-[#777777]'>{card.description}</p>
                            <button className='flex justify-center items-center text-xl font-bold text-[#0A2640] border-[#0A2640] border-b-[1px] pb-3'
                                onClick={card.buttonLink}>
                                Explore page <span className='pl-3'><img className='w-6' src={Arrow} /></span>
                            </button>
                        </div>

                    </div>
                ))
            }

        </div>
    </div>;
};

export default Ourservices;
