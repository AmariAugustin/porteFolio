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
    link : "",
    languages : ["React", "Vite", "CSS"]
}
];

function Project() {
    return (
        projects.map((project) => {
            return (
                <div>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <a href={project.link}>Link to the project</a>
                </div>)
        })
    )
}

export default Project;