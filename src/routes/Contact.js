import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import Form from '../components/Form';


export const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
        <HeroImg2 heading="Contact me" text="Lets Have a talk."></HeroImg2>
       <Form></Form>
      <Footer></Footer>
    </div>
  );
};
export default Contact;