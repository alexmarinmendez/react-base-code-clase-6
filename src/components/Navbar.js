import { useEffect } from "react";

const Navbar = () => {
    //componentDidMount
    useEffect(() => {
        console.log('El componente Navbar se montó en el DOM....')
    }, [])

    return (
        <header>
            <strong><em>React-Tube-App</em></strong>
        </header>
    );
}

export default Navbar;