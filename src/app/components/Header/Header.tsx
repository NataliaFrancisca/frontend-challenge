import Image from "next/image"

import "./Header.scss";

const Header = () => {
    return(
        <header className="header__home">
            <Image src={"/images/logo/logo.svg"} height={100} width={100} alt="logo marvel"/>

            <h1>EXPLORE O UNIVERSO</h1>
            <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>            
        </header>
    )
}

export default Header;