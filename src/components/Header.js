import {Container, ProgressBar} from "react-bootstrap";
import PortfolioImg from '../images/portfolio-img2.png'

export default function Header() {
    return (
        <div>

            <div className="header-background2">
                <div className="brandText">
                    <h1 className="text-center mt-2">TOM-DevA</h1>
                </div>

                <div className="portfolio-img-mobile">
                    <img src={PortfolioImg} alt="/"/>
                </div>


                <Container
                    className="shadow my-bg-con text-light bg-dark bg-opacity-75 flex justify-content-between items-center">
                    <div className='my-text-header-container'>
                        <h4 className='my-text-header'>Hi, my name is Tom,</h4>
                        <h6>I am a Front-End developer,
                            proficient in JavaScript libraries and
                            frameworks such as React and Nextjs.
                            I design intuitive user interface, scalable UI/UX.
                            My highly responsive top-notch skills in HTML and CSS3
                            will give your design a professional look.
                            <br/> <br/>
                            I am an expert in Reactjs and other CSS frameworks such as Tailwind,
                            bootstrap5 which helps me deliver beautiful designs with fast and effective layouts.
                            <br/> <br/>
                            Excellent in mobile app design using Android
                            Studio and java programming language.
                            With a unique theme design and styling for dark
                            or light mode functionality on any web or mobile
                            app, making elegant layouts and user-friendly too.
                        </h6>
                    </div>

                    <div className="portfolio-img w-[1080px] mt-20">
                        <img src={PortfolioImg} alt="/"/>
                    </div>

                    <div className="col-md-5 col-xs-11 skill-con">
                        <div className='d-flex justify-content-center skill-text'><h2>Skills</h2></div>
                        <div className='mb-2'>
                            <span className="text-top text-light">Web Design</span>
                            <ProgressBar now={98} label={98 + "%"}/>
                            <span className="text-top text-light">Mobile Apps </span>
                            <ProgressBar now={80} label={80 + "%"}/>
                            <span className="text-top text-light">JavaScript </span>
                            <ProgressBar now={97} label={97 + "%"}/>
                            <span className="text-top text-light">Reactjs/Nextjs</span>
                            <ProgressBar now={85} label={85 + "%"}/>
                            <span className="text-top text-light">HTML &amp; CSS </span>
                            <ProgressBar now={99} label={99 + "%"}/>
                            <span className="text-top text-light">Python</span>
                            <ProgressBar now={80} label={80 + "%"}/>
                            <span className="text-top text-light">Java</span>
                            <ProgressBar now={65} label={65 + "%"}/>
                            <span className="text-top text-light">Nodejs/express</span>
                            <ProgressBar now={50} label={50 + "%"}/>
                        </div>
                    </div>
                </Container>

            </div>
        </div>

    )
}