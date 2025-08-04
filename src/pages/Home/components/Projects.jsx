export const Projects = () => {
    const projects = [
        {
            name: "CoffeeBabe",
            description: "A cafeteria application with modern design and oAuth2 authentication. ☕",
            image: "images/projects/coffeebabe.png",
            url: "https://github.com/Rafaelszc/CoffeeBabe",
            skills: ["React", "Tailwind CSS", "Spring Boot", "PostgreSQL"]
        },
        {
            name: "GymSup Calculator",
            description: "A macronutrient calculator website with a clean design. 🍎",
            image: "images/projects/gymsup.png",
            url: "https://github.com/Rafaelszc/GymSup-Calculator",
            skills: ["React", "Tailwind CSS", "Spring Boot", "H2 Database"]
        },
        {
            name: "MyConfigs",
            description: "Configuration script for Fedora Linux.  🔧",
            image: "images/projects/myconfigs.png",
            url: "https://github.com/Rafaelszc/my_configs",
            skills: ["Python", "Bash", "Makefile", "Linux"]
        },
        {
            name: "Discord Discount Bot",
            description: "A Discord bot for finding discounts at the KaBum! store. 💸",
            image: "images/projects/discord-discount.png",
            url: "https://github.com/Rafaelszc/discord-discount-bot",
            skills: ["Python", "Discord API", "SQLite", "Beautifullsoup"]
        },
        {
            name: "IBGE Data Extract",
            description: "A automated script that extracts municipal data from IBGE. 📊",
            image: "images/projects/ibge-dt-ex.png",
            url: "https://github.com/Rafaelszc/IBGE-data-extract",
            skills: ["Python", "Beautifullsoup", "Pandas", "SQLite"]
        },
    ]

    const renderProjects = (p) => {
        return (
            <div className="group h-md-project p-4 w-80 flex flex-col items-center gap-4 text-white text-center bg-primary-50 rounded-lg shadow-lg transition transform duration-700 hover:scale-105 hover:shadow-xl">
                <div className="relative flex justify-center items-center">
                    <img className="object-cover h-72 rounded-lg  transition transform duration-700 group-hover:opacity-50" src={p.image} alt={p.name}/>
                    <a className="absolute" target="_blank" href={p.url}>
                        <img className="h-16 bg-black rounded-full p-1 invert opacity-0 transition transform duration-700 group-hover:opacity-100 hover:invert-0" src="icons/github-mark.webp" alt="" />
                    </a>
                </div>
                <span className="text-2xl font-bold">{p.name}</span>
                <span>{p.description}</span>
                <span className="mt-auto mb-2">{p.skills.join(" - ")}</span>
            </div>
        )
    }
    
    return (
        <div className="flex flex-wrap gap-20 justify-center items-center p-8 pt-0" id="projects">
            <div className="border-b border-white w-full flex justify-center items-center mt-16 pb-16">
                <span className="text-5xl text-white font-medium">Projects</span>
            </div>
            {projects.map((p) => (
                renderProjects(p)
            ))}
        </div>
    )
}