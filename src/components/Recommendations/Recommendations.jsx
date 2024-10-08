import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-custom.css";
import star from '../../assets/images/Star.png'

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/recommendations");
        setRecommendations(response.data);
      } catch (error) {
        fetchRecommendations();
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
     autoplay: true, 
     initialSlide: 2,
     autoplaySpeed: 3000,
     variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
   
  // I have implemented dynamic ratings in the cards as well.
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push( <img src={star} alt='stars'/>);
    }
    return stars;
  };

  return (
    <section id="recommendations" className=" px-3 lg:px-24  justify-center items-center bg-[#F0F0F6] ">
      <div className="overflow-hidden  flex flex-col gap-11 py-14   pb-12 " >
        <div className=" flex flex-col justify-center  text-center items-center  w-[100%] ">
           
            <h2 className="text-[2rem] font-bold text-[#2B2B2B]">Recommendations</h2>
          <p className="capitalize  w-[90%] lg:w-[43%]  text-[#767676] text-[.94rem]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
           
       
        </div>
        <div className="sm:ml-[-18.31rem]">
          <Slider {...settings}>
            {recommendations.map((recommendation, index) => (
              <div key={index} className="px-[.6rem] ">
                <div className="bg-white shadow-lg rounded-lg p-6 w-[340px]">
                  <div className="flex gap-3">
                    {renderStars(recommendation.rating)}
                  </div>
                  <h4 className="mt-3 text-lg font-medium text-gray-600">{recommendation.comment}</h4>
                  <p className="text-[.938rem] mt-4  text-gray-600">{recommendation.description}</p>
                  <div className="flex justify-center items-center mt-4 mr-6  gap-8">
                    <img
                    src={recommendation.imageUrl}
                      alt={recommendation.name}
                      className="w-[5.48rem] h-[5.03rem] rounded-full "
                    />
                    <div className=" ">
                      <h4 className="text-lg font-medium text-[#2B2B2B]">
                        {recommendation.name}
                      </h4>
                      <p className="text-[#767676] text-[.938rem]">{recommendation.profile}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
