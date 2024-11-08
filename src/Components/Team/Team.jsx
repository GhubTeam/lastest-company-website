import "./Team.css";
import teamMembers from "./TeamData";
import TeamCard from "./teamCard"

const Team = () => {

  const cardElement = teamMembers.map((member) => (
    <TeamCard key={member.name} {...member} />
  ));

  return (
    <div className="teams">
      <div className="gallery">{cardElement}</div>
    </div>
  );
};

export default Team;
