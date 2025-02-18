import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #66b3ff;
`;

const SlideContainer = styled.div`
  padding: 0 10px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #66b3ff;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

interface CarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SlideContainer key={index}>
            <SlideImage src={image.src} alt={image.alt} />
          </SlideContainer>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
