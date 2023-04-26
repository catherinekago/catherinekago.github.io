import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Section from '../atoms/Section';
import './Carousel.scss'

import bethThayne from '../../assets/images/testimonial-portraits/bethThayne.png'

const Carousel = () => {

    let portraits = [bethThayne];
    let testimonials = require('../../content.json').portfolio.testimonials;
     let items = testimonials.map((testimonial, index) => (
       <CarouselItem name={testimonial.name} occupation={testimonial.occupation} quote={testimonial.quote} img={portraits[index]}/>
    ));

    return (
        <div class="main-background-container" id="carousel-container" >
            <Section text="What others say about me" />
            <AliceCarousel autoPlay={true} autoPlayStrategy={"default"} infinite={true} autoPlayInterval={8000} controlsStrategy="alternate" mouseTracking items={items} />
        </div>
    )

}

const CarouselItem = (props) => {

    return (
            <div class="carousel-item-container" >
            <div class="carousel-item-person-container" >
            <img src={props.img} alt="portrait"  class="carousel-item-person-img"/>
                <div class="carousel-item-person-info" >
                    <h3>{props.name}</h3>
                    <p class='title-medium text-light' >{props.occupation}</p>
                </div>

            </div>
            <p class='title-medium text-light' >"{props.quote}"</p>
        </div >
    )

}

export default Carousel; 