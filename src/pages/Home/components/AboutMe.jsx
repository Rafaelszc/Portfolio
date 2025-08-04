export const AboutMe = () => {
    return (
        <section className="h-md-section bg-primary-50 flex flex-row justify-between items-center pl-8 pr-8" id="about-me">
            <div className="h-full w-full flex items-center justify-center">
                <div className="p-3 bg-primary-100 shadow-md transition transform duration-700 hover:scale-110 hover:shadow-lg *:transition *:transform *:duration-700 *:hover:scale-110 *:delay-100 rounded-lg">
                    <img className="h-96 rounded-lg" src="images/me.webp" alt="" />
                </div>
                
            </div>
            <div className="h-full w-full flex flex-col justify-center text-white ">
                <span className="text-6xl font-bold leading-relaxed">About Me</span>
                <span className="text-2xl leading-normal">
                    I am a results-oriented full stack developer with a proven track record of 
                    continuous learning and collaboration.
                    I create efficient and innovative solutions. 
                    Prioritize good communication, clean code and positive impact on projects.
                    </span>
            </div>
        </section>
    )
}