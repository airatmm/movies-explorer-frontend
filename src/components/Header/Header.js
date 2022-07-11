import './Header.css';
import { useEffect, useState } from "react";
import Logo from '../Logo/Logo';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Account from "../Account/Account";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Hamburger from "../Hamburger/Hamburger";

function Header({ loggedIn }) {
    // const headerClassName = `header ${loggedIn ? 'header__account' : 'header header__auth'}`;
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    });

    const isMobile = width <= 768;

    const [isOpen, setIsOpen] = useState(false);
    const handleBurgerMenuClick = () => setIsOpen(!isOpen);
    const closeBurgerMenuLink = () => setIsOpen(false)

    return (
            <header className="header">
                <Logo />

                {loggedIn && isMobile && <Hamburger isOpen={isOpen} onHamburgerClick={handleBurgerMenuClick} />}

                {loggedIn && !isMobile &&
                    (
                        (<>
                        <HeaderNavigation loggedIn={loggedIn}/>
                        <Account onCick={closeBurgerMenuLink}  />
                        </>)
                    )
                }
                {!loggedIn && <HeaderNavigation loggedIn={loggedIn}/> }

                {loggedIn && <BurgerMenu onClose={closeBurgerMenuLink} isOpen={isOpen} onHamburgerClick={handleBurgerMenuClick} />}

            </header>
    );
}

export default Header;
