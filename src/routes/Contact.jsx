import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Hero2 heading="CONTACT" text="Lets have a chat" />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Contact;
