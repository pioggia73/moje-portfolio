
import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import SingleProject from '../components/SingleProject';
import Section from '../components/globals/Section';
import Title from '../components/globals/Title'


const PortfolioPage = ({className}) => {
    return (
        <ProductConsumer>
            {value => { 
                const {projects} = value 

                    return (
                        <Section className = {className} color='${setColors.lightGrey}'>
                            <Title center title="my projects"/>
                            <div className="projects-container">
                                {projects.map(project => 
                                    <SingleProject key={projects.id} project={project}/>)}
                            </div> 
                        </Section>
            )
        }}
        </ProductConsumer>
    )
};

export default styled(PortfolioPage)`

    .projects-container {

        margin: 0 auto;
        width: 90vw;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-column-gap: 2rem;   
    }


`