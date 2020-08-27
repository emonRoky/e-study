import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const {img,course,price} = props.course;
    return (
            <div className='course-section'>
                <div className ='card'>
                    <img className='card-img-top'src={img} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{course}</h5>
                        <p className="card-text">${price}</p>
                        <button type="button"  onClick={()=>props.handelAddCourse(props.course)} className="btn btn-success"><FontAwesomeIcon icon={faCartPlus} /> Enroll</button>
                    </div>
                </div>
            </div>
             
         
    );
};

export default Course;