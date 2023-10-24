import "./sliderHome.css";
import {IoArrowBack, IoArrowForward} from 'react-icons/io5';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image01 from '../../assets/images/slider/01.png';
import image02 from '../../assets/images/slider/02.png';
import image03 from '../../assets/images/slider/03.png';

function SliderHome() {

    function handleContact() {
        window.open("/")
      }


    const data = [
        {
            id: "01",
            link: image01,
        },
        {
            id: "02",
            link: image02,
             },
        {
            id: "03",
            link: image03,
       }
    ]

const buttonStyle = {
    width: '50px',
    height:'50px',
  padding: '10px',
  borderRadius: '50%',
  background: 'rgba(124,78,216, 0.5)',
  color: '#fff',
  border: '0px',
  margin: '10px',
  fontSize: '20px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack/></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoArrowForward/></button>
}
   
    return (
      <Slide {...properties}>
          {data?.map((property) => {
            return (
                <div className="each-slide-effect" key={property.id}>
          <div className="imageTop">
            <div className="image">
                 <a href={`/imovel/${property.id}`}>
                    <img src={property.link} alt="" />
                </a>
            </div>
            </div>
          </div>
            )
          })
          }
      </Slide>
  );
};
  

  export { SliderHome }