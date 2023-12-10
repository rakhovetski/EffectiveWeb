import { useState } from "react";
import './Slider.css'

interface Slide {
    url: string;
    name: string;
    role: string;
    comment: string;
  }
  
  interface SliderProps {
    slides: Slide[];
  }
  
  const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };
  
    return (
      <>
        <div className="slider">
          <h1 className="customer-saying">What our customer are saying</h1>
          <hr className="slider-line"/>
          <div className="slider-content">
            <img className="slider-image" src={slides[currentSlide].url} alt={slides[currentSlide].name} />
            <div className="slider-customer-block">
              <h2 className="slider-customer-name">{slides[currentSlide].name}</h2>
              <span className="slider-customer-role">{slides[currentSlide].role}</span>
            </div>
            <div className="slider-description-block">
              <text className="slider-customer-comment">{slides[currentSlide].comment}</text>
            </div>
          </div>
        </div>
        <div className="slider-buttons">
          <button className="slider-button" onClick={prevSlide}>←</button>
          <ul className="slider-dots">
            {slides.map((slide, index) => (
            <li key={index.toString()} className={index == currentSlide ? "slider-dot active" : "slider-dot inactive"} 
                onClick={() => setCurrentSlide(index)}>
              
            </li>
            ))}
          </ul>
          <button className="slider-button" onClick={nextSlide}>→</button>
        </div>
      </>
    );
    
    
  };


  const SliderApp: React.FC = () => {
    const text: string = "Our dedicated patient engagement app and" +
                          "web portal allow you to access information instantaneously (no tedeous form, long calls," +
                          " or administrative hassle) and securely";
    const slides: Slide[] = [
      { url: "/images/kitten.png", name: "Edward Kitten", role: "Founder Circle", "comment": text },
      { url: "/images/funny-cat.jpg",  name: "Funny Cat", role: "Founder Circle", "comment": text  },
      { url: "/images/tree-cat.jpg",  name: "Tree Cat", role: "Founder Circle", "comment": text },
      { url: "/images/cool-cat.jpg",  name: "Cool Cat", role: "Founder Circle", "comment": text },
    ];
  
    return (
      <div className="app">
        <Slider slides={slides} />
      </div>
    );
  };
  
  export default SliderApp;
  