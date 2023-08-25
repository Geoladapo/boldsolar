
const NavBar = () => {
    return <div className="flex justify-between items-center py-10 mx-20">
        <div>
            <img className="w-40" src={"https://res.cloudinary.com/dhvwthnzq/image/upload/v1692882879/boldo/Logo_1_isvimz.png"} alt="Boldo Logo" />
        </div>
        <div className="text-white  z-20  flex justify-center text-base items-center font-openSans gap-10">
            <p className="cursor-pointer">Products</p>
            <p className="cursor-pointer">Services</p>
            <p className="cursor-pointer">About</p>
            <button className="bg-white font-bold text-[#0A2640] rounded-3xl px-9 py-2 mr-5">Log In</button>
        </div>
    </div>;
};

export default NavBar;
