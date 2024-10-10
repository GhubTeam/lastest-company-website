import "./Programs.css";
import service_1 from "../../assets/web-development.jpeg";
import service_2 from "../../assets/App development.png";
import service_3 from "../../assets/ui&ux-design.jpeg";
import service_icon_1 from "../../assets/web-devep icon.png";
import service_icon_2 from "../../assets/app-dev icon.png";
import service_icon_3 from "../../assets/ui&ux icon.png";

function Services() {
  const sevicelist = [
    {
      img: service_1,
      descrip: "Web Development",
      icon: service_icon_1,
    },

    {
      img: service_2,
      descrip: "Mobile App Development",
      icon: service_icon_2,
    },
    {
      img: service_3,
      descrip: "UI & UX Design ",
      icon : service_icon_3
    }
  
  ];

  function Card(props) {
    return (
      <div className="program">
        <img src={props.img} alt="" />
        <div className="caption">
          <img src={props.icon} alt="" />
          <p>{props.descrip}</p>
        </div>
      </div>
    );
  }

  const serviceElements = sevicelist.map((service, index) => (
    <Card key={index} {...service} />
  ));

  return <div className="programs">{serviceElements}</div>;
}

export default Services;
