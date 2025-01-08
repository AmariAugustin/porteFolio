const projects = [{
    name : "Covid 19 TwitterBot",
    description : "NO LONGER WORK. A Twitter bot that tweets the daily number of Covid-19 cases in France.",
    link : "https://github.com/AmariAugustin/Twitter-Bot-Covid-19",
    languages : ["Python", "Tweepy", "Twitter API"]
},
{
    name : "Stickman Fitght's ultimate",
    description : "A simple fighting game with stickman characters.",
    link : "https://github.com/AmariAugustin/Stickman-Fitght_s-ultimate",
    languages : ["Python", "Pygame"]
},
{
    name : "2048",
    description : "A simple 2048 game in c language.",
    link : "https://github.com/AmariAugustin/2048",
    languages : ["C"]
},
{
    name : "Porte Folio",
    description : "This actual website.",
    link : "https://github.com/AmariAugustin/porteFolio",
    languages : ["React", "Vite", "CSS"]
}, 
{
    name : "Hanoi Tower",
    description : "A simple Hanoi Tower game in java with a GUI in swing.",
    link : "https://github.com/AmariAugustin/Hanoi-Tower-Java",
    languages : ["Java", "Swing"]
}
];

function Project() {
    return (
        <div className="container" id = "project-section">
            <h1>Some of my projects</h1>
            {projects.map((project) => (
                <div className="project-card" key={project.name}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">Link to the project</a>
                    <div className="languages-container">
                        {project.languages.map((language) => (
                            <span className="language-badge" key={language}>{language}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;