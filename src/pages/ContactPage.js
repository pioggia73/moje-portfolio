import React from 'react';
//import styled from 'styled-components';
import Contact from '../components/Contact';
import Hero from '../components/globals/Hero';
import ContactBcg from '../images/ContactBcg.jpg';
import Section from '../components/globals/Section';

export default function ContactPage() {

    return (

        <>
            <section>
                <Hero img = {ContactBcg} />
                <Contact />
            </section>
        </>
    )
};

