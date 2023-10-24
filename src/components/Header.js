import {Container, ProgressBar} from "react-bootstrap";
import PortfolioImg from '../images/portfolio-img2.png'

export default function Header() {
    return (
        <div>
            <div className="header-background2">
                {/*<div className="brandText">*/}
                {/*    <h1 className="text-center mt-2">TOM-DevA</h1>*/}
                {/*</div>*/}

                <div className="portfolio-img-mobile">
                    <img src={PortfolioImg} alt="/"/>
                </div>


                <Container
                    className=" my-bg-con text-light bg-dark bg-opacity-75 flex justify-content-between items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="col-span-3 md:col-span-1 lg:col-span-3">
                            <h4 className='my-text-header text-center'>Hi, my name is Tom,</h4>
                            <h5 className="my-text-header p-2">
                                a MERN-Stack Developer with a passion for creating exceptional web experiences.
                                With a strong foundation in JavaScript libraries and frameworks like React and Next.js,
                                I specialize in building interactive and dynamic web applications.
                            </h5>
                        </div>
                        <h6 className="lg:col-span-1 col-span-3 p-2 border-2">
                            <strong>Front-End Development:</strong> I excel at crafting intuitive user interfaces
                            and scalable UI/UX. My highly responsive skills in HTML and CSS3 ensure that your web
                            applications have a professional and polished look.
                        </h6>
                        <h6 className="lg:col-span-1 col-span-3 p-2 border-2">
                            <strong>React and Beyond:</strong> I'm an expert in React.js and proficient in other CSS
                            frameworks like Tailwind and Bootstrap 5. These tools allow me to deliver stunning
                            designs with fast and efficient layouts.
                        </h6>
                        <h6 className="lg:col-span-1 col-span-3 p-2 border-2">
                            <strong>MERN Stack Expertise:</strong> My core skills include working with MongoDB for
                            robust data management, and I'm well-versed in creating RestAPIs to provide seamless
                            data integration in your applications.
                        </h6>

                        <h6 className="lg:col-span-1 col-span-3 p-2 border-2">
                            <strong>Firebase Integration:</strong> I'm experienced in implementing Firebase
                            databases and authentication, ensuring secure and real-time data interaction in your
                            projects. Firebase is a key tool in my arsenal for building dynamic applications.
                        </h6>

                        <h6 className="lg:col-span-1 col-span-3 p-2 border-2">
                            <strong>Mobile App Development:</strong> I can create mobile apps using Android Studio and
                            Java, tailoring
                            unique themes and styles for dark or light mode functionality. This adds an extra layer of
                            personalization to your mobile applications, making them not only elegant but also
                            user-friendly.
                        </h6>

                        <h6 className="lg:col-span-1 col-span-3 p-2 border-2">
                            <strong>Work Experience:</strong> I have worked with start-ups tech firm such as
                            TheBemsGroup on a contract. In addition to my work at BemsGroup, I've built a strong
                            presence in the freelance community. My expertise in web development has allowed me
                            to undertake a multitude of freelance projects, both online and offline. I've had the
                            pleasure of working with clients from diverse industries, providing them with tailored
                            web App solutions that meet their unique needs.
                        </h6>

                        <h5 className="col-span-3 p-2">
                            I'm dedicated to delivering top-notch web and mobile solutions, and I'm excited to bring
                            your project to life. Feel free to explore my portfolio to see examples of my work, and
                            if you have any questions or need assistance with your next project, don't hesitate to
                            get in touch. Your success is my priority.
                        </h5>
                    </div>


                </Container>

            </div>
            <Container className="row mx-auto mt-5">
                <div className="portfolio-img col-lg-6">
                    <img src={PortfolioImg} alt="/"/>
                </div>

                <div className="col-md-5 col-xs-11 skill-con col-lg-6 mx-auto">
                    <div className='d-flex justify-content-center skill-text text-white'><h2>My skills</h2></div>
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

    )
}
