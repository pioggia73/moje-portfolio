import React from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import Course from "../components/Course";
import Section from "../components/globals/Section";
import Title from "../components/globals/Title";


const CoursesPage = ({className, color}) => {
    return <ProductConsumer>
    
    {value => {
       const {courses} = value 

        return <Section className={className} color="#f5f6fa">
                    <Title title='my courses' b='2rem' center/>
                        <ul className="courses-container">
                            {courses.map((course) => {
                                return <Course key={course.id} course={course}/>
                            })}
                        </ul>
                </Section>   
                    }}
            </ProductConsumer>
};

export default styled(CoursesPage)`

    .courses-container {

        display: grid;
        grid-template-rows: repeat(auto-fit(minmax(4rem, 1fr)));
        grid-row-gap: 2rem;
        width: 80vw;
        margin: 0 auto;   
    }
`;
