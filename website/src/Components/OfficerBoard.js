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
      name: 'ABBY KREMER',
      role: 'President',
      major: 'ELECTRICAL AND COMPUTING ENGINEERING',
      imageSrc: 'http://texasluminescence.org/wp-content/uploads/2024/06/DSC_0161-scaled-e1717468666311.jpg', // Replace with actual path
      linkedin: 'https://www.linkedin.com/in/abby-kremer/',
    },
    {
      name: 'ETHAN MIKEL',
      role: 'Director of Finance',
      major: 'MANAGEMENT INFORMATION SYSTEMS',
      imageSrc: 'http://texasluminescence.org/wp-content/uploads/2024/06/DSC_0161-scaled-e1717468666311.jpg',
      linkedin: 'https://www.linkedin.com/in/ethanmikel/',
    },
    {
      name: 'CASHEL FITZGERALD',
      role: 'Director of Engineering',
      major: 'ELECTRICAL AND COMPUTING ENGINEERING',
      imageSrc: 'http://texasluminescence.org/wp-content/uploads/2024/06/DSC_0161-scaled-e1717468666311.jpg',
      linkedin: 'https://www.linkedin.com/in/cashel-fitzgerald/',
    },
    {
      name: 'NOOR ALI',
      role: 'Director of Recruitment',
      major: 'COMPUTER SCIENCE',
      imageSrc: 'http://texasluminescence.org/wp-content/uploads/2024/06/DSC_0161-scaled-e1717468666311.jpg',
      linkedin: 'https://www.linkedin.com/in/noor-ali/',
    },
    {
      name: 'RAUNAK MANCHANDA',
      role: 'Director of Marketing',
      major: 'COMPUTER SCIENCE',
      imageSrc: 'http://texasluminescence.org/wp-content/uploads/2024/06/DSC_0161-scaled-e1717468666311.jpg',
      linkedin: 'https://www.linkedin.com/in/raunak-manchanda/',
    },
  ];

  const chairs = [
    {
      name: 'CAMERON KETTLER',
      role: 'Social Events Chair',
      major: 'ELECTRICAL AND COMPUTING ENGINEERING',
      imageSrc: 'http://texasluminescence.org/wp-content/uploads/2024/06/DSC_0161-scaled-e1717468666311.jpg',
      linkedin: 'https://www.linkedin.com/in/cameron-kettler/',
    },
    {
      name: 'CARINE HARB',
      role: 'Community Outreach Chair',
      major: 'COMPUTER SCIENCE',
      imageSrc: 'http://texasluminescence.org/wp-content/uploads/2024/06/DSC_0161-scaled-e1717468666311.jpg',
      linkedin: 'https://www.linkedin.com/in/carine-harb/',
    },
    {
      name: 'JENNY DOAN',
      role: 'Social Media Chair',
      major: 'MANAGEMENT INFORMATION SYSTEMS',
      imageSrc: 'http://texasluminescence.org/wp-content/uploads/2024/06/DSC_0161-scaled-e1717468666311.jpg',
      linkedin: 'https://www.linkedin.com/in/jenny-doan/',
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