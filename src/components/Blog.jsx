import { blogPost } from '../MockData/data';

const Blog = () => {
  return (
    <div className="lg:px-32 px-10 h-full py-20">
      <div className="flex flex-col gap-5 mb-20 items-center justify-center">
        <p className=" font-openSans font-bold text-3xl text-black">Our Blog</p>
        <h3 className=" font-manrope text-center text-3xl lg:text-5xl">
          Value proposition accelerator product management venture
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-24">
        <div className="flex flex-col lg:flex-row gap-12 px-10">
          {blogPost.map((card) => (
            <div
              className="flex flex-col  gap-5 font-openSans"
              key={card.id}
            >
              <img
                className="w-[200px]"
                src={card.mainImage}
              />
              <div className="flex flex-col  h-full gap-5">
                <div className="flex gap-3">
                  <p className="font-bold text-[#0A2640] ">{card.category}</p>
                  <p className=" text-[#777777]">{card.date}</p>
                </div>
                <h5 className="text-xl   leading-[32px] ">
                  {card.description}
                </h5>
              </div>
              <div className="flex items-center gap-5 ">
                <img
                  className="w-8"
                  src={card.imgLink}
                />
                <p className="">{card.name}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="border-[#0A2640] text-[#0A2640] border-2 bg-white py-4 px-10 lg:px-14 font-bold
             text-xl rounded-full"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Blog;
