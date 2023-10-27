const FAQs = () => {
  return (
    <div className="flex flex-col px-10 lg:px-32 py-28 ">
      <div>
        <img
          className=" w-[1000px] h-[400px] "
          src="https://res.cloudinary.com/dutvrzezk/image/upload/v1696377031/pexels-ndel-mea-9875684_tgxfmy.jpg"
        />
      </div>
      <div className="flex flex-col lg:flex-row mt-16 gap-20 ">
        <h2 className=" flex-1 font-manrope text-3xl lg:text-4xl leading-9 lg:leading-[56px] ">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <span className="  flex items-center justify-between font-openSans mb-4 text-lg lg:text-xl">
              We connect our customers with the best?
              <img
                className="w-7 mb-5 lg:mb-0 ml-5 lg:ml-0"
                src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692979789/boldo/Group_210_1_d7bry6.png"
              />
            </span>
            <hr className="border-t-[1px] border-[#C4C4C4]" />
          </div>
          <div>
            <span className=" flex items-center justify-between font-openSans mb-5 text-lg lg:text-xl">
              Android research & development rockstar?
              <img
                className="w-7 mb-5 lg:mb-0 ml-5 lg:ml-0"
                src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692979789/boldo/Group_210_1_d7bry6.png"
              />
            </span>
            <hr className="border-t-[1px] border-[#C4C4C4]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
