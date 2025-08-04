export const Skills = () => {
    const skills = [
        {
            skill: "Languages",
            technologies: ["Python", "Java", "JavaScript", "C"]
        },
        {
            skill: "Full-Stack",
            technologies: ["HTML5", "CSS", "React", "Tailwind CSS", "Spring Boot"]
        },
        {
            skill: "Data Science",
            technologies: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Keras"]
        },
        {
            skill: "Dev Tools",
            technologies: ["Git", "GitHub", "Docker"]
        }
    ]

    const renderSkills = (s) => {
        return (
            <div className="h-96 w-60 bg-primary-100 rounded-lg flex flex-col items-center p-4 text-white">
                <div className="mb-8">
                    <span className="pb-2 border-b border-purple-500 h-fit font-normal">{s.skill}</span>
                </div>
                
                <ul className="list-none flex flex-col justify-center items-center gap-8">
                    {s.technologies.map((t) => (<li className="cursor-pointer transform transition duration-500 hover:text-purple-500">{t}</li>))}
                </ul>
            </div>
        )

    }

    return (
        <div className="bg-primary-50 flex flex-col p-8 pt-0 pb-16" id="skills">
            <div className="border-b border-white w-full flex justify-center items-center mt-16 pb-16">
                <span className="text-5xl text-white font-medium">Skills</span>
            </div>

            <div className="flex flex-wrap items-center justify-around gap-8 mt-16">
                {skills.map((s) => (renderSkills(s)))}
            </div>
        </div>
    )

}