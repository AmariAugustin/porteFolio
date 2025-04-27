const experiencies = [
    {
        name: "Internship at XYZ Company",
        description: "Worked on developing a web application using React and Node.js.",
        date: "June 2022 - August 2022"
    }
];

function Experiencies() {
    return (
        <div className="container" id = "project-section">
            <br></br>
            <h1 id = "scrollspyHeading3">My experiencies</h1>
            {experiencies.map((exp) => (
                <div className="project-card" key={exp.name}>
                    <h2>{exp.name}</h2>
                    <p>{exp.description}</p>
                    <p>{exp.date}</p>
                </div>
            ))}
        </div>
    );
}

export default Experiencies;