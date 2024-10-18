
import './Team.css'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-4.jpg'
import gallery_3 from '../../assets/gallery-3.jpg'

const Team = () => {
  const teamMembers = [
    {
      name: "Chidiebere Ojingwa",
      position: "CEO & FOUNDER",
      image: gallery_1 
    },
    {
      name: "Daniel Ojingwa",
      position: "Software Developer",
      image: gallery_2 
    },
    {
      name: "Theophilus  Omede",
      position: "Software Developer ",
      image:  gallery_3
    }
  ];
  function TeamCard(props) {
    return (
      <div className="team-card">
        <img src={props.image} alt="" />
        <div className='user-info'>
          <h3 className="name">{props.name} </h3>
          <span className="position">{props.position}</span>
        </div>
      </div>
    );
  }
  const cardElement = teamMembers.map(member => <TeamCard key={member.name } {...member} />)
  return (
    <div className="teams">
      <div className="gallery">
        {cardElement}
      </div>
    </div>
  );
}

export default Team
