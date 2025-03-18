import { Link } from "react-router-dom";
const Hero = () =>{
    return(
        <section id="hero">
            <div className="container flex flex-col-reverse items-center px-12 mx-auto mt-16 space-y-0 md:space-y-0 md:flex-row">
                <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                    <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Satisfying your adrinalin is our Responsibility !</h1>
                    <p className="max-w-sm text-center text-white">Our responsibility is to satisify your need with all the safety measures concerns, where we have bikes in all segments to make you select your comfortable bike.</p>
                    <div className="flex justify-center md:justify-start">
                        <Link to="#" className="px-3 pt-2 py-2 text-white bg-lime-500 rounded mx-2 hover:text-black">Buy Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;
