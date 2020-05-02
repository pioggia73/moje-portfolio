import React from 'react';
import styled, {css} from 'styled-components';
import {ProductConsumer} from '../context';
import {SmallBtn} from '../components/globals/Buttons';

const SingleProject = ({project, className}) => {

    return <ProductConsumer>
    
        {value => 
            {const {img,sourcePath, pagePath} = project
        
                return <article className={className}>
                    <div className= "content-container">
                        <div className="content">
                            <SmallBtn as="a" href={sourcePath}><h6>view source</h6></SmallBtn>
                            <SmallBtn as="a" href={pagePath}><h6>view page</h6></SmallBtn>
                        </div>
                    </div>
                </article>
        }}
    </ProductConsumer>
}

export default styled(SingleProject)`

    .content-container{
        width: 30%;
        height: 240px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 0 7.5px 15px;
      

        &:first-child {
                margin-right: 7.5px;
            }

            &:last-child {
                margin-left: 7.5px;
            }


        .content {
            height: 90px;
            padding: 0 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid black;

            h6 {
                font-weight: bold;
                margin-bottom: 6px;
                font-size: 22px;
            }
            
        }
    }

    
`;