import {Button, Container, Form, FormControl, Spinner} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import whatsappIcon from '../images/whatsapp.svg'
import emailIcon from '../images/email.svg'
import facebookIcon from '../images/facebook.svg'
import myCVIcon from '../images/pdfIcon.svg'
import myCV from '../images/Anuma Thomas CV.pdf'
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const [isLoading, setIsLoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs.sendForm(
            'service_wm58quk',
            'template_ffm8guf',
            form.current,
            'WlZkTAW_Fb2g7sTjW')
            .then(() => {
                setIsLoading(false)
                alert("Your message has been sent")
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            })
    }


    return (
        <footer className="bg-dark text-light contact-us-con">
            <h2 className="d-flex justify-content-center shadow">CONTACT ME</h2>
            <div className="bg-dark text-light d-flex contact-con">
                <Container className="flex flex-column">
                    <div className="flex items-center gap-2">
                        <img src={whatsappIcon} style={{width: "1.5rem"}} alt=""/>
                        <span> +2347064676627 </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                        <img src={emailIcon} style={{width: "1.5rem"}} alt=""/>
                        <span> tombrownanuma@gmail.com</span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                        <img src={facebookIcon} style={{width: "1.5rem"}} alt=""/>
                        <span> <a style={{textDecoration: 'none', color: "white"}}
                                  href="https://www.facebook.com/tombrown.anuma2">My Facebook</a></span>

                    </div>

                    <div className="mt-3 flex items-center gap-2">
                        <img src={myCVIcon} style={{width: "1.5rem"}} alt=""/>
                        <a style={{textDecoration: 'none', color: "white"}} href={myCV}><Button className="rounded-3">Download
                            CV</Button> </a>
                    </div>
                </Container>
                <hr/>
                <Container>
                    <Form ref={form} onSubmit={sendEmail}>
                        <FormControl
                            className="mt-2 border-0 rounded-0"
                            type="email"
                            name="user_email"
                            placeholder="Your Email"/>
                        <FormControl
                            className="mt-2 border-0 rounded-0"
                            as="textarea"
                            name="message"
                            placeholder="Write to me"/>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            value="Send"
                            className="mt-2 mb-3 rounded-0 w-100">

                            {isLoading && <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />}
                            {!isLoading && "SEND"}
                        </Button>
                    </Form>
                </Container>
            </div>

            <hr/>
            <div className="d-flex justify-content-center copy-right">
                <p>
                    Copyright © 2020 Tom-DevA Personal Profile . Designed by
                    TomBrown
                </p>

            </div>
        </footer>
    )
}