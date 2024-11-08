function TeamCard(props) {
    return (
        <div className="team-card">
            <img src={props.image} alt="" />
            <div className="user-info">
                <h3 className="name">{props.name}</h3>
                <span className="position">{props.position}</span>
            </div>
            <div className="social-popup">
                {props.socialMedia.map((media, index) => (
                    <a
                        key={index}
                        href={media.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={media.icon} alt={media.name} />
                    </a>
                ))}
            </div>
        </div>
    );
}
export  default TeamCard