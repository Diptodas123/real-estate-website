import React, { useEffect } from "react";
import Menu from "../Menu/Menu";
import "./About.css"
import Footer from "../Footer/Footer";


const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Menu />

            <div className="about-page-top-hero mb-5">
                <div className="about-page-top-hero-left">
                    <p className="about-page-top-hero-left-texts">
                        Helping millions find a home.
                    </p>
                </div>
                <div className="about-page-top-hero-right">
                    <img src="img/about_us_header.jpg" alt="img/about_us_header.jpg" />
                </div>
            </div>

            {/* //!Start writing the remaining code from here */}

            <div className="about-us-topic1">
                <div className="container">
                    <div className="row">
                        <div className="about-page-mission-left">
                            <br /><br /> <h2 className="mission" style={{ color: "#7a4bcf" }}> OUR MISSION</h2>
                            <p className="about-page-mission-left-text">
                                The mission of our house selling company website is to provide a seamless, informative, and empowering experience for both buyers and sellers. We aim to offer an extensive, high-quality listing of properties, enabling buyers to find their dream homes with ease. For sellers, our platform is dedicated to effectively showcasing their properties and connecting them with potential buyers. We prioritize transparency, offering valuable convenience and trust at every step. Ultimately, our mission is to facilitate successful property transactions and make the journey of buying or selling a house as smooth as possible.</p>
                        </div>
                        <div className="about-us-image2-right">
                            <img src="img/about-us-image2.jpg" alt="img/about-us-image2.jpg" /><br /><br />
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-page-topic1">
                <div className="container">
                    <div className="row">
                        <div className="about-page-story-left">
                            <br /> <br /> <h2 className="mission" style={{ color: "#7a4bcf" }}> OUR STORY</h2>
                            <p className="about-page-story-left-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra ultrices feugiat.
                                Aliquam orci velit, consectetur non ligula id, egestas condimentum dui. Aenean eu dui pellentesque,
                                dictum lorem ut, mattis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Integer quis efficitur arcu. Aliquam cursus accumsan eleifend. In molestie rhoncus risus,
                                sit amet congue mauris mollis eget. Aenean mollis volutpat urna, sit amet tempus erat blandit ac.
                                Nunc ac erat sapien.</p>
                        </div>
                        <div className="about-us-image3-right">
                            <img src="img/about-us-image3.jpg" alt="about-us-image" className="img3-about-uss" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="meet-the-team mt-5">
                <div className="container">
                    <h1 className="meet-team-heading">MEET THE TEAM!</h1> <br /> <br />
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img src="img/dipto.jpg" alt="img/about-us-pic" id="meet-the-team-pic" />
                            <h5>Dipto Das</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img src="img/swapnil.jpg" alt="img/about-us-pic" id="meet-the-team-pic" />
                            <h5>Swapnil Bhattacharya</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img src="img/meenakshi.jpg" alt="img/about-us-pic" id="meet-the-team-pic" />
                            <h5>Meenakshi Sarkar</h5>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-4 col-sm-12">
                            <img src="img/vaishnavi.jpg" alt="img/about-us-pic" id="meet-the-team-pic" />
                            <h5>Vaishnavi Anantha Krishnan</h5>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-12">
                            <img src="img/sidhant.jpg" alt="img/about-us-pic" id="meet-the-team-pic" />
                            <h5>Siddhant Deora</h5>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}
export default AboutUs;