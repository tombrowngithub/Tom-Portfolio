import {Container, ProgressBar} from "react-bootstrap";
import PortfolioImg from '../images/portfolio-img2.png'
export default function Header() {
    return (
        <div className="header-background">
            <div className="brandText">
                <h1 className="text-center mt-2">TOM-DevA</h1>
            </div>

            <div className="portfolio-img-mobile">
                <img src={PortfolioImg} alt="/"/>
            </div>

            <Container className="my-bg-con text-light bg-dark bg-opacity-75 d-flex justify-content-between">
                <div className='my-text-header-container'>
                    <h4 className='my-text-header'>Hi, my name is Tom,</h4>
                    <h6>I'm a Front-End developer,
                        proficient in JavaScript libraries and
                        frameworks such as React and Nextjs.
                        I design an intuitive user interface and
                        a highly responsive and scalable UI/UX.
                        My top-notch skills in HTML and CSS3 will
                        give your design with professional look.
                          <br/> <br/>
                        I currently work mainly with Reactjs and other
                        CSS frameworks such as Tailwind and Bootstrap5
                        which help me deliver beautiful designs with fast
                        and responsive layouts.
                        <br/> <br/>
                        Excellent in mobile app design using Android
                        Studio and java programming language.
                        With a unique theme design and styling for dark
                        or light mode functionality on any web or mobile
                        app, making elegant layouts and user-friendly
                        as well.
                    </h6>
                </div>

                <div className="portfolio-img">
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
                        <span className="text-top text-light">React</span>
                        <ProgressBar now={85} label={85 + "%"}/>
                        <span className="text-top text-light">HTML &amp; CSS </span>
                        <ProgressBar now={99} label={99 + "%"}/>
                        <span className="text-top text-light">Python</span>
                        <ProgressBar now={80} label={80 + "%"}/>
                        <span className="text-top text-light">Java</span>
                        <ProgressBar now={65} label={65 + "%"}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}