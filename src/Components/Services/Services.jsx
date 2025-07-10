import "./Services.css";
import service_icon_1 from "../../assets/web-dev-icon.png";
import service_icon_2 from "../../assets/mobile-app-icon.svg";
import service_icon_3 from "../../assets/ui-ux-icon.jpg";
import service_icon_4 from "../../assets/consulting-icon.jpg"

function Services() {
  const ServiceList = [
    {
      title: "Full-Stack Web Development",
      icon: service_icon_1,
      description:
        "We craft scalable web applications using cutting-edge technologies like React, Next.js, and Node.js to deliver exceptional digital experiences.",
    },
    {
      title: "Cross-Platform Mobile Solutions",
      icon: service_icon_2,
      description:
        "We develop native and hybrid mobile applications using React Native, Flutter, and Swift to reach users across all platforms seamlessly.",
    },
    {
      title: "UI/UX Design & Product Strategy",
      icon: service_icon_3,
      description:
        "We design intuitive interfaces and user journeys that drive engagement, combining data-driven insights with modern design principles.",
    },
    {
      title: "Digital Transformation Consulting",
      icon: service_icon_4,
      description:
        "We guide businesses through their digital evolution with strategic technology recommendations, architecture planning, and implementation roadmaps.",
    },
  ];
  function Card(props) {
    return (
      <div className="service">
        <img src={props.icon} alt=""  className=" card-icon"/>
        <h3 className = "service-title">{props.title}</h3>
        <p className = "service-description"> {props.description}</p>
      </div>
    );
  }

  const serviceElements = ServiceList.map((service, index) => (
    <Card key={index} {...service} />
  ));

  return (
    <>
      <h2 className="subtitle">Empowering Your Business with    <span className = "orange-text"> Cutting-Edge </span>Digital Solutions</h2>
      <div className="services">{serviceElements}</div>
    </>
  );
}

export default Services;
