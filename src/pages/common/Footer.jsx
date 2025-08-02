export const Footer = () => {
    return(
        <footer className="bg-primary-50 h-32 border-t border-t-white pr-8 pl-8  flex justify-between items-center">
            <ul className="list-none flex flex-col gap-2">
                <li className="text-white">©2025, por Rafael Souza</li>
                <li className="text-white">All rights reserved</li>
                <li className="text-white">MIT License</li>
            </ul>
            <ul className="flex list-none gap-6">
                <li>
                    <a href="https://github.com/Rafaelszc" target="_blank">
                        <img className="h-8 hover:-translate-y-1 transform transition duration-200" 
                        src="/icons/github-mark.webp" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/rafaelszc" target="_blank">
                        <img className="h-8 hover:-translate-y-1 transform transition duration-200" 
                        src="/icons/linkedin.webp" alt="" />
                    </a>
                </li>
                <li>
                    <a href="mailto:rafaelbjj84@gmail.com" target="_blank">
                        <img className='h-8 hover:-translate-y-1 transform transition duration-200' 
                        src="icons/gmail.webp" alt="" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}