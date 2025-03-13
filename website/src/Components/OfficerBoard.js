import React from 'react';

// OfficerCard Component
const OfficerCard = ({ name, role, major, imageSrc, linkedin }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} className="card-image" />
      <h3 className="card-name">{name}</h3>
      <p className="card-details">
        {role}
        <br />
        <br />
        Major: {major}
      </p>
      <div className="card-spacer"></div>
      <p>
        <button className="card-button">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </button>
      </p>
    </div>
  );
};

const OfficerBoard = () => {
  const officers = [
    {
      name: "Abby Kremer",
      role: "President",
      major: "Electrical and Computer Engineering",
      imageSrc: require("../assets/officer_images/abby_kremer.JPG"),
      linkedin: "https://www.linkedin.com/in/abby-kremer/",
    },
    {
      name: "Ethan Mikel",
      role: "Director of Finance",
      major: "Management Information Systems",
      imageSrc: require("../assets/officer_images/ethan_mikel.JPG"),
      linkedin: "https://www.linkedin.com/in/ethanmikel/",
    },
    {
      name: "Cashel Fitzgerald",
      role: "Director of Engineering",
      major: "Electrical and Computer Engineering",
      imageSrc: require("../assets/officer_images/cash_fitzgerald.JPG"),
      linkedin: "https://www.linkedin.com/in/cashel-fitzgerald/",
    },
    {
      name: "Noor Ali",
      role: "Director of Recruitment",
      major: "Computer Science",
      imageSrc: require("../assets/officer_images/noor_ali.JPG"),
      linkedin: "https://www.linkedin.com/in/noor-ali/",
    },
    {
      name: "Raunak Manchanda",
      role: "Director of Marketing",
      major: "Computer Science",
      imageSrc: require("../assets/officer_images/raunak_manchanda.JPG"),
      linkedin: "https://www.linkedin.com/in/raunak-manchanda/",
    },
  ];

  const chairs = [
    {
      name: "Ashi Sharma",
      role: "Social Events Chair",
      major: "Computer Science",
      imageSrc: require("../assets/officer_images/ashi_sharma.jpg"),
      linkedin: "https://www.linkedin.com/in/ashi-sharma/",
    },
    {
      name: "Carine Harb",
      role: "Community Outreach Chair",
      major: "Computer Science",
      imageSrc: require("../assets/officer_images/carine_harb.JPG"),
      linkedin: "https://www.linkedin.com/in/carine-harb/",
    },
    {
      name: "Jenny Doan",
      role: "Social Media Chair",
      major: "Management Information Systems",
      imageSrc: require("../assets/officer_images/jenny_doan.JPG"),
      linkedin: "https://www.linkedin.com/in/jenny-doan/",
    },
  ];

  return (
    <div className="officer-board-container">
      <h2 className="officer-board-title">Officer Board</h2>
      <div className="officer-grid">
        {officers.map((officer, index) => (
          <OfficerCard
            key={index}
            name={officer.name}
            role={officer.role}
            major={officer.major}
            imageSrc={officer.imageSrc}
            linkedin={officer.linkedin}
          />
        ))}
      </div>

      <h2 className="officer-board-title">Chairs</h2>
      <div className="officer-grid">
        {chairs.map((chair, index) => (
          <OfficerCard
            key={index}
            name={chair.name}
            role={chair.role}
            major={chair.major}
            imageSrc={chair.imageSrc}
            linkedin={chair.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default OfficerBoard;