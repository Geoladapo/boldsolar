import { feedBack } from '../MockData/data';
import { useState } from 'react';
const project = feedBack;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const currentProject = project[index];
  const handlePrevious = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, feedBack.length - 1));
  };

  return (
    <div
      id="Work"
      className="bg-[#0A2640] relative h-full px:20 lg:px-32 py-20"
    >
      <div className="flex items-center mb-16 lg:mb-14 ">
        <h2 className="lg:text-5xl text-3xl text-center font-manrope lg:pr-[230px] lg:text-start leading-[50px] lg:leading-[76px] w-fit text-white">
          An enterprise template to ramp up your company website
        </h2>
        <div className="lg:flex items-center hidden justify-end pt-16 gap-5 m-2"></div>
      </div>

      <div
        key={index}
        className="flex flex-col justify-center items-center px-10 lg:flex-row gap-10 lg:gap-5"
      >
        <img
          onClick={handleNext}
          className="bg-white p-3 w-16 rounded-full flex items-center justify-center"
          src={
            'https://res.cloudinary.com/dhvwthnzq/image/upload/v1692975819/boldo/arrow-right_1_bvkj1v.png'
          }
        />
        {currentProject && (
          <div
            className="flex flex-col gap-10 items-start md:w-fit w-full h-fit clip-rounded-full bg-white p-10 lg:p-20 rounded-xl drop-shadow-md "
            key={index}
          >
            <div>
              <p className="font-openSans text-2xl leading-[36px] text-[#000000]">
                {name.description}
              </p>
            </div>
            <div className="flex flex-col items-center  justify-center font-openSans gap-5">
              <img
                className=" w-[300px] h-[150]"
                src={currentProject.imgLink}
              />
              <div className="flex font-openSans text-[#0A2640] flex-col">
                <p className="font-bold text-base">{currentProject.name}</p>
                <p className="text-sm">
                  {currentProject.position} @ {currentProject.company}
                </p>
              </div>
            </div>
          </div>
        )}
        <img
          onClick={handlePrevious}
          className="bg-white p-3 w-16 rounded-full flex items-center justify-center "
          src={
            'https://res.cloudinary.com/dhvwthnzq/image/upload/v1692979596/boldo/arrow-right_3_mubj0t.png'
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;
