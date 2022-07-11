import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HeaderFooterLayout = ({loggedIn }) => {

    return (
        <>
            <Header loggedIn={loggedIn} />
            <Outlet />
            <Footer />
        </>
    )
}

export default HeaderFooterLayout;
