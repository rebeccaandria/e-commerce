import React, { Component } from "react";
import { Slide } from "react-slideshow-image";


class Slideshow extends Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            current: 0
        };
    }

    back() {
        this.slideRef.current.goBack();
    }

    next() {
        this.slideRef.current.goNext();
    }

    render() {
        const properties = {
            duration: 5000,
            autoplay: true,
            transitionDuration: 500,
            arrows: true,
            infinite: true,
        };
        const slideImages = [

            "/maquette/ensemble_protheses.jpg",
            "/maquette/inscription.jpg",
            "/maquette/rdv.jpg",
            "/maquette/dessin_hommes.jpg",
        ];
        return (
            <div className="App">
                <div className="slide-container">
                    <Slide ref={this.slideRef} {...properties}>
                        {slideImages.map((each, index) => (
                            <div key={index} className="each-slide">
                                <img className="lazy" src={each} alt="sample" />
                            </div>
                        ))}
                    </Slide>
                </div>

                <style jsx>{`
                    .slide-container {
                        align-items: center;
                        justify-content: center;
                        max-width: 900px;
                        margin-bottom: 2rem;
                      }
                      
                      .each-slide {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-size: cover;
                        height: 600px;
                        overflow: hidden;
                      }
                      
                      .each-slide span {
                        padding: 20px;
                        font-size: 20px;
                        background: #efefef;
                        text-align: center;
                      }                  
                `}</style>
                <style jsx global>{`
                    .react-slideshow-container {
                        display: flex;
                        align-items: center
                    }
                    
                    .react-slideshow-container .nav {
                        z-index: 10
                    }
                    
                    .react-slideshow-container .default-nav {
                        height: 30px;
                        background: rgba(255, 255, 255, 0.6);
                        width: 30px;
                        border: 0;
                        text-align: center;
                        cursor: pointer;
                        color: #fff;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center
                    }
                    
                    .react-slideshow-container .default-nav span {
                        display: block;
                        width: 10px;
                        height: 10px;
                        border-color: #000;
                        border-style: solid;
                        transform: rotate(45deg)
                    }
                    
                    .react-slideshow-container .default-nav.disabled span {
                        border-color: #666
                    }
                    
                    .react-slideshow-container .default-nav:hover, .react-slideshow-container .default-nav:focus {
                        background: #fff;
                        color: #666;
                        outline: 0
                    }
                    
                    .react-slideshow-container .default-nav.disabled:hover {
                        cursor: not-allowed
                    }
                    
                    .react-slideshow-container .default-nav:first-of-type {
                        margin-right: -30px;
                        border-right: 0;
                        border-top: 0
                    }
                    
                    .react-slideshow-container .default-nav:first-of-type span {
                        margin-left: 5px;
                        border-right: 0;
                        border-top: 0
                    }
                    
                    .react-slideshow-container .default-nav:last-of-type {
                        margin-left: -30px
                    }
                    
                    .react-slideshow-container .default-nav:last-of-type span {
                        margin-right: 5px;
                        border-left: 0;
                        border-bottom: 0
                    }
                    
                    .react-slideshow-container+div.indicators {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        margin-top: 20px
                    }
                    
                    .react-slideshow-container+div.indicators li {
                        display: inline-block;
                        position: relative;
                        width: 7px;
                        height: 7px;
                        padding: 5px;
                        margin: 0
                    }
                    
                    .react-slideshow-container+div.indicators .each-slideshow-indicator {
                        border: 0;
                        opacity: .25;
                        cursor: pointer;
                        background: transparent;
                        color: transparent
                    }
                    
                    .react-slideshow-container+div.indicators .each-slideshow-indicator:before {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 7px;
                        height: 7px;
                        border-radius: 50%;
                        content: '';
                        background: #000;
                        text-align: center
                    }
                    
                    .react-slideshow-container+div.indicators .each-slideshow-indicator:hover, .react-slideshow-container+div.indicators .each-slideshow-indicator.active, .react-slideshow-container+div.indicators .each-slideshow-indicator:focus {
                        opacity: .75;
                        outline: 0
                    }
                    
                    .react-slideshow-fade-wrapper {
                        width: 100%;
                        overflow: hidden
                    }
                    
                    .react-slideshow-fade-wrapper .react-slideshow-fade-images-wrap {
                        display: flex;
                        flex-wrap: wrap
                    }
                    
                    .react-slideshow-fade-wrapper .react-slideshow-fade-images-wrap>div {
                        position: relative;
                        opacity: 0
                    }
                    
                    .react-slideshow-wrapper.slide {
                        width: 100%;
                        overflow: hidden
                    }
                    
                    .react-slideshow-wrapper .images-wrap {
                        display: flex;
                        flex-wrap: wrap
                    }
                    
                    .react-slideshow-zoom-wrapper {
                        width: 100%;
                        overflow: hidden
                    }
                    
                    .react-slideshow-zoom-wrapper .zoom-wrapper {
                        display: flex;
                        flex-wrap: wrap;
                        overflow: hidden
                    }
                    
                    .react-slideshow-zoom-wrapper .zoom-wrapper>div {
                        position: relative;
                        display: flex
                    }   
                `}</style>

            </div>
        );
    }
}

export default Slideshow;