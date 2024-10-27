
import footImg from "/logo-footer.png";
import bg from '../../public/bg-shadow.png'
const Footer = () => {
    return (
        <div className="relative flex flex-col items-center mt-[40vh]">
            <div className="absolute -top-40  w-5/6 mx-auto flex  flex-col border p-6 rounded-3xl">
                <div style={{
                    backgroundImage: `url(${bg})`,
                }} className="p-16  bg-base-200 rounded-3xl">
                    <form className="flex flex-col items-center">
                        <h6 className="footer-title">Subscribe to our Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label text-center">
                                <span className="label-text">
                                    Get the latest updates and news right in your inbox!
                                </span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item"
                                />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <footer className="footer bg-[#06091A] text-white p-10 flex items-center flex-col pt-40  ">
                <div>
                    <img src={footImg} alt="" />
                </div>
                <div className=" grid grid-cols-[1fr_1fr_1fr] gap-4 justify-around">
                    <nav>
                        <h6 className="footer-title">About Us</h6>
                        <p>
                            We are a passionate team dedicated to providing the best services
                            to our customers.
                        </p>
                    </nav>
                    <nav className=" flex flex-col mx-auto">
                        <h6 className="footer-title">Quick Links</h6>
                        <li className="link link-hover">Home</li>
                        <li className="link link-hover">Services </li>
                        <li className="link link-hover">About</li>
                        <li className="link link-hover">Contact</li>
                    </nav>

                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">
                                    Subscribe to our newsletter for the latest updates.
                                </span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item"
                                />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>

                <p className="w-full flex justify-center border-t-2 border-primary mt-6 p-3">
                    &copy; 2024 Sabbir. All rights reserved.
                </p>
            </footer>


        </div>
    );
};

export default Footer;