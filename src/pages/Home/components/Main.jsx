export const Main = () => {
    const langs = [
        {alt: 'Java', src: 'images/langs/java.webp', delay: '0.5s'},
        {alt: 'Python', src: 'images/langs/python.webp',  delay: '0.4s'},
        {alt: 'JavaScript', src: 'images/langs/javascript.webp', delay: '0.7s'}
    ]

    const technologies = [
        {alt: 'React', src: 'images/langs/react.webp', delay: '0.3s'},
        {alt: 'Spring Boot', src: 'images/langs/spring-boot.webp', delay: '0.6s'},
        {alt: 'Pandas', src: 'images/langs/pandas.webp', delay: '0.5s'},
    ]

    const showKnowledges = (k) => {
        return (
            <li>
                <img className={`h-20 animate-float`} style={{animationDelay: k.delay}} src={k.src} alt={k.alt} />
            </li>
        )
    }

    return (
        <main className="overflow-hidden">
            <div className="flex flex-row items-center justify-between ml-10 mr-10 h-md-section animation-del">
                <div className="w-full animate-arise">
                    <span className="text-white text-3xl leading-normal">
                        I am <span className="text-purple-500 font-bold">Rafael</span>! <br /> Full Stack Developer
                    </span>
                </div>
                    
                <div className="flex flex-col gap-5 justify-center items-center text-center w-full h-full relative ">
                    <ul className="list-none *:select-none flex gap-3 z-20 animate-arise">
                        {langs.map((l) => (
                            showKnowledges(l)
                        ))}
                    </ul>
                    <ul className="list-none *:select-none flex gap-3 mb-36 z-10 animate-arise">
                        {technologies.map((t) => (
                            showKnowledges(t)
                        ))}
                    </ul>
                    <img className="h-44 absolute bottom-24 left-36 animate-arise select-none" src="images/hand.webp"/>
                    <span className="bg-green-350 h-96 w-96 rounded-full absolute -z-50 select-none"></span>
                </div>
            </div>

        </main>
    )
}