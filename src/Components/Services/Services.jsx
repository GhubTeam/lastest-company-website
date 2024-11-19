import "./Services.css";
import service_1 from "../../assets/web_dvp (2).png";
import service_2 from "../../assets/app dvp.jpg";
import service_3 from "../../assets/ui_ux_img.jpg";
import service_4 from "../../assets/Tech-consultant.png"
import service_icon_1 from "../../assets/web-devep icon.png";
import service_icon_2 from "../../assets/app-dev icon.png";
import service_icon_3 from "../../assets/ui&ux icon.png";
import service_icon_4 from "../../assets/tech-consult.png"

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
    },
     {
      img: service_4,
      descrip: "Tech Consultancy ",
      icon : service_icon_4
    }
  
  ];

  function Card(props) {
    return (
      <div className="service">
        <img src={props.img} alt=""  className=" card-img"/>
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

  return <div className="services" >{serviceElements}</div>;
}

export default Services;
