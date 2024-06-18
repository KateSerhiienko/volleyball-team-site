import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Team = ({ teamMembers }) => {
  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="external-container py-10 sm:py-16 lg:py-20">
      <h2 className="mb-4 text-center font-accent tracking-widest font-bold">
        <p className="text-lg text-red-600">TEAM</p>
        <p className="text-4xl">FREIBERGER MAULWÜRFE</p>
      </h2>
      <p className="mb-4">
        Our team is comprised of a dynamic group of players, coaches, and
        support staff who are passionate about volleyball. Whether it&apos;s
        spiking, blocking, or strategizing, each member brings their unique
        skills and energy to the court. Meet our amazing team and get to know
        the individuals who make every game a thrilling experience. Stay tuned
        for updates on our upcoming matches and events!
      </p>
      <Slider {...sliderSettings} className="mb-10">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className="w-56 h-auto mx-auto p-4 bg-main-dark/10 rounded overflow-hidden text-center">
              <div
                className="w-full h-72 mb-4 rounded bg-cover bg-top bg-no-repeat"
                style={{
                  backgroundImage: `url(${member.img})`,
                }}
              ></div>
              <h3 className="font-bold">{member.name}</h3>
              <p className="mb-4 text-sm">
                {member.position && `${member.position}`}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <Link to="/team">
        <button className="block btn-primary-2 mx-auto">Show all Team</button>
      </Link>
    </section>
  );
};

Team.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Team;
