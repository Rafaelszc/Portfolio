export const Footer = () => {
        const contacts = [
        {name: "github", url: "https://github.com/Rafaelszc", imgUrl: "icons/github-mark.webp"},
        {name: "linkedin", url: "https://linkedin.com/in/rafaelszc", imgUrl: "icons/linkedin.webp"},
        {name: "gmail", url: "mailto:rafaelbjj84@gmail.com", imgUrl: "icons/gmail.webp"}
    ]

    const renderContacts = (c) => {
        return (
                <li>
                    <a href={c.url} target="_blank">
                        <img className="h-8 hover:-translate-y-1 transform transition duration-200" 
                        src={c.imgUrl} alt={c.name}/>
                    </a>
                </li>
        )
    }
    return(
        <footer className="bg-primary-50 h-32 border-t border-t-white pr-8 pl-8  flex justify-between items-center">
            <ul className="list-none flex flex-col gap-2">
                <li className="text-white">©2025, por Rafael Souza</li>
                <li className="text-white">All rights reserved</li>
                <li className="text-white">MIT License</li>
            </ul>
            <ul className="flex list-none gap-6">
                {contacts.map((c) => (
                    renderContacts(c)
                ))}
            </ul>
        </footer>
    )
}