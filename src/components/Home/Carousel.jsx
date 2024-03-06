import React, { Component } from "react";
import Slider from "react-slick";

function Carousel(props) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "ketan",
    centerMode: true,
    infinite: true,
    draggable: false,
    arrows: true,
    centerPadding: "160px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container border  ">
      <Slider {...settings}>
        <div className=" ">
          <div className="container my-8">
            <div class="relative bg-white px-6 pb-8 pt-10 border-color: #B9FF66 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <div class="mx-auto max-w-md">
                <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />
                <div class="divide-y divide-gray-300/50">
                  <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                    <p>
                      Quizzify has been a game-changer for my classroom! It's so
                      easy to create interactive quizzes that keep my students
                      engaged and excited about learning. I love how I can track
                      their progress and see their improvement over time. Highly
                      recommend!
                    </p>
                    <p>
                      Perfect for learning how the framework works, prototyping
                      a new idea, or creating a demo to share online.
                    </p>
                  </div>
                  <div class="pt-8 text-base font-semibold leading-7">
                    <p>Read the docs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="container my-8">
            <div class="relative bg-white px-6 pb-8 pt-10 border-color: #B9FF66 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <div class="mx-auto max-w-md">
                <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />
                <div class="divide-y divide-gray-300/50">
                  <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                    <p>
                      Quizzify has been a game-changer for my classroom! It's so
                      easy to create interactive quizzes that keep my students
                      engaged and excited about learning. I love how I can track
                      their progress and see their improvement over time. Highly
                      recommend!
                    </p>
                    <p>
                      Perfect for learning how the framework works, prototyping
                      a new idea, or creating a demo to share online.
                    </p>
                  </div>
                  <div class="pt-8 text-base font-semibold leading-7">
                    <p>Read the docs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="container my-8">
            <div class="relative bg-white px-6 pb-8 pt-10 border-color: #B9FF66 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              <div class="mx-auto max-w-md">
                <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />
                <div class="divide-y divide-gray-300/50">
                  <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                    <p>
                      Quizzify has been a game-changer for my classroom! It's so
                      easy to create interactive quizzes that keep my students
                      engaged and excited about learning. I love how I can track
                      their progress and see their improvement over time. Highly
                      recommend!
                    </p>
                    <p>
                      Perfect for learning how the framework works, prototyping
                      a new idea, or creating a demo to share online.
                    </p>
                  </div>
                  <div class="pt-8 text-base font-semibold leading-7">
                    <p>Read the docs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
