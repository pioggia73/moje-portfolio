import React from 'react';
import Title from '../components/globals/Title';
import styled from 'styled-components';
import {PrimaryBtn} from '../components/globals/Buttons';
import {setTransition, setRem, setShadow} from '../styles';
import Section from '../components/globals/Section'

const Contact = ({className}) => {
    
    return (
        <Section className={className}>
        
            <Title  title = "contact me" center/>

                <form action = "https://formspree.io/webdevelopermonika@gmail.com"
                    method = "POST" className = "form-container"
                >
                    <div className = "form-group">
                        <input
                        type = "text"
                        name = "firstName"
                        id = "name"
                        className = "form-control"
                        placeholder = "full name" required
                        />
                        <label  for= "name" className= "form-label">Full name</label>
                    </div>

                    <div className = "form-group">
                        <input
                        type = "email"
                        name = "email"
                        className = "form-control"
                        placeholder = "email address" required
                        />
                        <label for="email" className= "form-label">email address</label>
                    </div>

                    <div className = "form-group">
                        <textarea
                        name = "message"
                        className = "form-control"
                        row = "10"
                        placeholder = "your message here..." 
                        />
                    </div>

                    <div className = "form-group">
                       <PrimaryBtn
                        type = "submit"
                        value = "Send"
                        className = "form-button">
                        send
                        </PrimaryBtn>
                    </div> 
            </form>
        
    </Section> 
   
    )
};



export default styled (Contact)`

    .form-container {
        width: 80vw;
        margin: 0 auto;
    }

    .form-group {
        input,
        textarea {
            font-size: ${setRem(20)};
            padding: ${setRem(16)} ${setRem(30)};
        }
    }




`;