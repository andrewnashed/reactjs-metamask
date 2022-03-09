const About = ({children}) => {
    return ( <div className="flex flex-col space-y-2 text-center w-full text-gray-600">
        <h2 className="font-bold text-2xl">About</h2>
        <section className="flex flex-col items-start w-full space-y-2">
            <h3 className="font-bold">Vision</h3>
            <p className="pl-4 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  dolore eu fugiat nulla pariat</p>
        </section>
        <section className="flex flex-col items-start w-full space-y-2">
            <h3 className="font-bold">Important Links</h3>
            <ul className="pl-4 text-left">
                <li>
                    <a href="#" className="underline pr-2">
                        Click here
                    </a>
                    to learn more about Krause House
                </li>
                <li>
                <a href="#" className="underline pr-2">
                        Click here
                    </a>
                    for other resources
                </li>
                <li>
                <a href="#" className="underline pr-2">
                        Click here
                    </a>
                    to see how you can contribute
                </li>
            </ul>
        </section>
        {children}
    </div> );
}
 
export default About;