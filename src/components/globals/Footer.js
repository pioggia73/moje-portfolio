import React from 'react';
import styled from 'styled-components';
import {setColors, setRem} from '../../styles';
import {ProductConsumer} from '../../context' ;

const Footer = ({className})  => {

    return <ProductConsumer>

        {value => {

            const {socialData} = value

            return <footer className = {className}>

                <div className="footer-info">
                    <p>copyright&copy; monika {new Date().getFullYear()}. all rights reserved.
                    created with React.</p>
                </div>

                <div className="footer-icons">
                    {socialData.map(item => 
                        <a key={item.id} href={item.url} className="icon">{item.icon}</a>)}
                </div>
            </footer>
        }}
    </ProductConsumer>
}


export default styled(Footer)`

    background: ${setColors.mainBlack};
    padding: ${setRem(16)};
    display: flex;
    justify-content: space-between;
   
    .footer-info {
        p {
            color: ${setColors.mainGrey};
            text-transform: capitalize;
            align-self: center;  
        }  
    }

    .footer-icons {
        display: flex;

       .icon {
           color: ${setColors.lightGrey};
           font-size: ${setRem(16)};
           padding: ${setRem(16)};
           align-self: center;
       }
    }



`;