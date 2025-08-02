export const Header = () => {
    return (
        <header className="h-md-header flex items-center justify-between pr-8 pl-8 sticky top-0 bg-primary-100 z-50">
            <div>
                <a href="/">
                    <h1 className="select-none animate-typing border-r-2 border-r-white overflow-hidden text-3xl text-white font-medium">
                        Rafaelszc
                    </h1>
                </a>
            </div>

            <nav>
                <ul className="flex list-none gap-4 text-purple-500">
                    <li className="font-medium hover:-translate-y-1 transform transition duration-200 hover:text-white">
                        <a href="#about-me">About</a>
                    </li>
                    <li className="font-medium hover:-translate-y-1 transform transition duration-200 hover:text-white">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="font-medium hover:-translate-y-1 transform transition duration-200 hover:text-white">
                        <a href="#skills">Skills</a>
                    </li>
                </ul>
            </nav>
            <div>
                <ul className="flex list-none gap-4">
                    <li>
                        <a href="https://github.com/Rafaelszc" target="_blank">
                            <img className="h-6 hover:-translate-y-1 transform transition duration-200" 
                            src="/icons/github-mark.webp" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/rafaelszc" target="_blank">
                            <img className="h-6 hover:-translate-y-1 transform transition duration-200" 
                            src="/icons/linkedin.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:rafaelbjj84@gmail.com" target="_blank">
                            <img className='h-6 hover:-translate-y-1 transform transition duration-200' 
                            src="icons/gmail.webp" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}