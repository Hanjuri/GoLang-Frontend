import React from 'react';
import Slider from 'react-slick';
import * as style from './styled/Banner.styled.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

// 이미지 배열 (Banners)
const Banners = [
    {
        num: 0,
        img: "../../../assets/img/homeBackground.png",
    },
    {
        num: 1,
        img: "../../../assets/img/homeBackground.png",
    },
    {
        num: 2,
        img: "../../../assets/img/homeBackground.png",
    },
];

const BannerSlider = () => {
    const settings = {
        dots: true,           // 점 네비게이션 활성화
        infinite: true,       // 무한 스크롤
        speed: 500,           // 슬라이드 전환 속도
        slidesToShow: 1,      // 한 번에 하나의 슬라이드만 보여줌
        slidesToScroll: 1,    // 한 번에 하나의 슬라이드를 넘김
        autoplay: true,       // 자동 슬라이드 활성화
        autoplaySpeed: 5000,  // 자동 슬라이드 속도 (5초)
    };

    const navigate = useNavigate();

    // 특정 슬라이드 클릭 시 페이지 이동 (예: 'lifetip' 페이지)
    const handleNavigateLifetip = () => {
        navigate('/lifetip');
    };

    return (
        <style.TotalWrapper>
            <Slider {...settings}>
                {Banners.map((card) => (
                    <style.BannerWrap key={card.num} onClick={handleNavigateLifetip}>
                        <style.MainImg src={card.img.default} alt={`Banner ${card.num}`} />
                    </style.BannerWrap>
                ))}
            </Slider>
        </style.TotalWrapper>
    );
};

export default BannerSlider;
