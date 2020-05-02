
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
                        <Section className={className}>
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
}

export default styled(PortfolioPage)`


    .projects-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
    }


`