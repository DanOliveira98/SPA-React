import React from "react";
import Foto1 from '../../pages/Home/imagens_home/fotoHome.jpg';
import Foto2 from '../../pages/Home/imagens_home/fotoHome2.jpg';
import Foto3 from '../../pages/Home/imagens_home/fotoHome3.jpg';
import Foto4 from '../../pages/Home/imagens_home/fotoHome4.jpg';
import Foto5 from '../../pages/Home/imagens_home/fotoHome5.jpg';
import Foto6 from '../../pages/Home/imagens_home/fotoHome6.jpg';
import Foto7 from '../../pages/Home/imagens_home/fotoHome7.jpg';
import Foto8 from '../../pages/Home/imagens_home/fotoHome8.jpg';
import Carousel from 'react-bootstrap/Carousel'

const CarrouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item className="center-block">
                <img
                    className="d-block w-100"
                    src={Foto1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="center-block">
                <img
                    className="d-block w-100"
                    src={Foto2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="center-block">
                <img
                    className="d-block w-100"
                    src={Foto3}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="center-block">
                <img
                    className="d-block w-100"
                    src={Foto4}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="center-block">
                <img
                    className="d-block w-100"
                    src={Foto5}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="center-block">
                <img
                    className="d-block w-100"
                    src={Foto6}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="center-block">
                <img
                    className="d-block w-100"
                    src={Foto7}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="center-block">
                <img
                    className="d-block w-100"
                    src={Foto8}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>

    );
}



export default CarrouselHome;