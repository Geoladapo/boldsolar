const Growth = () => {
  return (
    <div
      id="AboutUs"
      className="flex justify-center flex-col lg:flex-row items-center mt-14 lg:mt-0 gap-32 py-10  mx-10 lg:mx-32"
    >
      <div className="w-[100%] ">
        {' '}
        <div className="w-[100%] flex mx-[auto] my-0 gap-20 justify-between items-center ">
          <div className=" gap-14 lg:gap-10 flex-1 ">
            <h2 className=" font-manrope text-3xl lg:text-4xl  leading-9 lg:leading-[56px] px-[70px]"></h2>
            I am Michael Robert, the CEO of influxsolarinc. With a profound
            dedication to clean energy, I've devoted my career to advancing
            sustainable solutions to different companies across the world. This
            hands-on experience has shaped my commitment to providing
            cutting-edge solar solutions that prioritize quality and
            sustainability.
          </div>

          <div className="flex-1">
            {' '}
            <img
              className="w-[300px] "
              src="https://res.cloudinary.com/dutvrzezk/image/upload/v1698375724/Mic_w2us4b.jpg"
              alt="Michael"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
