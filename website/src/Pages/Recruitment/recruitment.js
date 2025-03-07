import React, { useState, useEffect } from "react";
import "./recruitment.css";
import "../../Styles/pages.css"

import Image1 from "../../Assets/carousel_images/profit_share_group.JPEG";
import Image2 from "../../Assets/carousel_images/stem_girl_day.JPEG";
import Image3 from "../../Assets/carousel_images/google_guest_speaker_group.JPEG";
import Image4 from "../../Assets/carousel_images/officer_board_hookem.JPG";
import Image5 from "../../Assets/carousel_images/ut_smartplanner_midsem.JPEG";
import Image6 from "../../Assets/carousel_images/zilker_social_group.JPG";
import Image7 from "../../Assets/carousel_images/musicmate_midsem.JPEG";
import Image8 from "../../Assets/carousel_images/pickleball_social.jpg";
import Image9 from "../../Assets/carousel_images/website_midsem.JPEG";
import Image10 from "../../Assets/carousel_images/jenis_social.JPEG";

const RecruitmentPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moveCarousel = (step) => {
    setCurrentSlide((prevSlide) => {
      let newSlide = prevSlide + step;
      if (newSlide >= carouselImages.length) return 0;
      if (newSlide < 0) return carouselImages.length - 1;
      return newSlide;
    });
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  const carouselImages = [
    {
      src: Image1,
      alt: "Image 1",
      text: "Willingness to work together, share knowledge, and support fellow members"
    },
    {
      src: Image2,
      alt: "Image 2",
      text: "Respect for different viewpoints and a commitment to creating an inclusive environment"
    },
    {
      src: Image3,
      alt: "Image 3",
      text: "Strong communication skills and desire to learn and explore new concepts, technologies, and methodologies"
    },
    {
      src: Image4,
      alt: "Image 4",
      text: "Highly dedicated and motivated individuals passionate about our mission"
    },
    {
      src: Image5,
      alt: "Image 5",
      text: "A proactive approach to problem-solving and an innovative mindset"
    },
    {
      src: Image6,
      alt: "Image 6",
      text: "Genuine interest in artificial intelligence and machine learning"
    },
    {
      src: Image7,
      alt: "Image 7",
      text: "Effective in sharing ideas, providing feedback, and listening to others"
    },
    {
      src: Image8,
      alt: "Image 8",
      text: "Team players who thrive in collaborative environments and value teamwork"
    },
    {
      src: Image9,
      alt: "Image 9",
      text: "Members from diverse academic disciplines and perspectives"
    },
    {
      src: Image10,
      alt: "Image 10",
      text: "Commitment to improving technical skills and staying updated with advancements in the field"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      <h1 className="page-title">Recruitment</h1>

      <p className="intro-text">
        We are excited about your interest in Texas Luminescence! Our Spring
        2025 recruiting cycle is coming soon. To stay updated, check back here
        for the latest news. We look forward to connecting with you!
      </p>

      <div className="tg-container">
        <table className="tg">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1/13</td>
              <td>Applications Released</td>
              <td>10:00 am</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>1/15</td>
              <td>Presentations from Current Build Team Projects</td>
              <td>7:00 pm - 8:00 pm</td>
              <td>ECJ 1.204</td>
            </tr>
            <tr>
              <td>1/15</td>
              <td>Information Session (In-Person)</td>
              <td>8:00 pm - 8:30 pm</td>
              <td>ECJ 1.204</td>
            </tr>
            <tr>
              <td>1/19</td>
              <td>Applications Due</td>
              <td>11:59 pm</td>
              <td>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqZ-BSAuBiyrns8o5xmJHLpD6GSBh-TFe1rVfUmYsg_t9z8Q/viewform?usp=dialog">
                  Application Link
                </a>
              </td>
            </tr>
            <tr>
              <td>1/26-1/31</td>
              <td>Interviews</td>
              <td>TBD</td>
              <td>TBD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="images-heading">Qualities We Look For</h2>
      <hr />
      <div className="carousel">
        <div className="carousel-images">
          {carouselImages.map((image, index) => (
            <div
              className={`carousel-image ${
                currentSlide === index ? "active" : ""
              }`}
              key={index}
            >
              <img src={image.src} alt={image.alt} />
              <div className="carousel-text">{image.text}</div>
            </div>
          ))}
        </div>
        <div className="carousel-nav">
          <button className="nav-button" onClick={() => moveCarousel(-1)}>
            &#10094;
          </button>
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setSlide(index)}
              ></span>
            ))}
          </div>
          <button className="nav-button" onClick={() => moveCarousel(1)}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPage;
