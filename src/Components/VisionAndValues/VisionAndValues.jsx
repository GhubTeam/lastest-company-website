import "./VisionAndValues.css";

const VisionAndValues = () => {
  const values = [
    {
      id: 1,
      title: "Innovation",
      description:
        "We strive to stay ahead of the curve, bringing cutting-edge solutions to our clients.",
    },
    {
      id: 2,
      title: "Integrity",
      description:
        "We believe in transparency and honesty in everything we do.",
    },
    {
      id: 3,
      title: "Excellence",
      description:
        "Delivering top-notch quality is at the heart of our operations.",
    },
    {
      id: 4,
      title: "Collaboration",
      description: "Partnering with our clients to achieve shared success.",
    },
  ];

  return (
    <section className="vision-values">
      <p className="vision-description">
        At <span className = "orange-text bigger-text"> Ghub Technology</span>, we are driven by our vision to transform businesses
        through technology, guided by core values that define who we are.
      </p>
      <div className="values-container">
        {values.map((value) => (
          <div className="value-card" key={value.id}>
            <h3 className="value-title orange-text">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionAndValues;
