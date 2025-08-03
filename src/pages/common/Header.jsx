export const Header = () => {
    const contacts = [
        {name: "github", url: "https://github.com/Rafaelszc", imgUrl: "icons/github-mark.webp"},
        {name: "linkedin", url: "https://linkedin.com/in/rafaelszc", imgUrl: "icons/linkedin.webp"},
        {name: "gmail", url: "mailto:rafaelbjj84@gmail.com", imgUrl: "icons/gmail.webp"}
    ]
    const sections = [
        {name: "About", href: "#about-me"},
        {name: "Projects", href: "#projects"},
        {name: "Skills", href: "#skills"}
    ]


    const renderContacts = (c) => {
        return (
                <li>
                    <a href={c.url} target="_blank">
                        <img className="h-6 hover:-translate-y-1 transform transition duration-200" 
                        src={c.imgUrl} alt={c.name}/>
                    </a>
                </li>
        )
    }

    const renderSections = (s) => {
        return (
            <li className="font-medium hover:-translate-y-1 transform transition duration-200 hover:text-white">
                <a href={s.href}>{s.name}</a>
            </li>
        )
    }

    return (
        <header className="h-md-header flex items-center justify-between pr-8 pl-8 sticky top-0 bg-primary-100 z-50">
            <div>
                <a href="/Portifolio">
                    <h1 className="select-none animate-typing border-r-2 border-r-white overflow-hidden text-3xl text-white font-medium">
                        Rafaelszc
                    </h1>
                </a>
            </div>

            <nav>
                <ul className="flex list-none gap-4 text-purple-500">
                    {sections.map((s) => (
                        renderSections(s)
                    ))}
                </ul>
            </nav>
            <div>
                <ul className="flex list-none gap-4">
                    {contacts.map((c) => (
                        renderContacts(c)
                    ))}
                </ul>
            </div>
        </header>
    )
}