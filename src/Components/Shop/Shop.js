import React from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Course from '../Course/Course';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Shop = () => {
    console.log(fakeData);
    const showProduct = fakeData;
    const [course, setCourse] = useState(showProduct);
    const [cart, setCart] = useState([]);

    const handelAddCourse = (course)=>{
        const newCart = [...cart,course];
            setCart(newCart);
    }
    return (
        <div className="course-container">
            <div className="course">
                <div className='course-section'>
                    {
                        course.map(course => <Course 
                            handelAddCourse={handelAddCourse}
                            course={course}>
                        </Course>)
                    }
                </div>
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;