import Logo from './LogoFooter';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-emerald-300 from-10% via-emerald-400 via-30% to-emerald-500 to-90 w-full">
            <div className="flex flex-row w-full">
                <div className="w-1/2 mt-28
                ">
                    <h1 className="text-4xl text-white ml-5 "> Newsletter & Special Promo</h1>
                    <div className="w-30 h-20 mt-4">
                        <input className="bg-white text-base py-2 pr-48 pl-5 ml-5 border border-l border-blue-500 rounded-l rounded-bl indent-placeholder" placeholder="Enter your email here"></input>
                        <button className="bg-green-400 hover:bg-green-500 text-white py-2 pr-6 pl-4 border border-green-1000 rounded-r rounded-br">
                            Submit
                        </button>

                    </div>
                </div>
                <div className="p-2 items-center justify-center">
                    <div className=" p-4 flex items-center justify-center w-full">
                        <div className="flex flex-col w-full">
                            <div className="items-center justify-center ml-52">
                                <Logo/>
                            </div>
                            <div className="flex flex-row mt-4">
                                <div className="w-1/3 ml-32 mr-12">
                                    <div className="flex flex-col w-full">
                                        <div className="text-sm text-white mb-6" >About Us</div>
                                        <div className="text-sm text-white mb-10">Contact</div>
                                        <div className="text-sm text-white mb-0">Location</div>
                                    </div>
                                </div>
                                <div className="w-1/3 mr-12">
                                    <div className="flex flex-col w-full">
                                        <div className="text-sm text-white mb-10">FAQ</div>
                                        <div className="text-sm text-white mb-4">Terms of Use</div>
                                        <div className="text-sm text-white mb-0">Privacy Policy</div>
                                    </div>
                                </div>
                                <div className="w-1/3 mr-12">
                                    <div className="flex flex-col ">
                                        <div className="text-sm text-white mb-2">Service & Facilities</div>
                                        <div className="text-sm text-white mb-8">Careers</div>
                                        <div className="text-sm text-white mb-0">How to book</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            {/* Content for the bottom row, if needed */}
                        </div> {/* Missing closing div */}
                    </div>
                </div>
            </div> {/* Closing div added here */}
            {/* Right container */}
            <div className="relative w-full flex items-center">
                <div className="absolute left-1/4 w-2/4 border-t border-white m-0 p-0"></div>
            </div>
            <div className="flex flex-row justify-center mt-8">
                <a href="https://facebook.com" className="text-white mx-8 hover:scale-125 transform transition duration-200">
                    <FaFacebookF size={32} />
                </a>
                <a href="https://twitter.com" className="text-white mx-8 hover:scale-125 transform transition duration-200">
                    <FaTwitter size={32} />
                </a>
                <a href="https://youtube.com" className="text-white mx-8 hover:scale-125 transform transition duration-200">
                    <FaYoutube size={32} />
                </a>
                <a href="https://linkedin.com" className="text-white mx-8 hover:scale-125 transform transition duration-200">
                    <FaLinkedinIn size={32} />
                </a>
            </div>
            <div className="flex flex-col items-center justify-center w-full mb-12 mt-6">
                <h1 className="text-white text-center">
                    © Copyright Booking Hotels. All right reserved.
                </h1>
            </div>

        </div>
    );
}
