import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import Offer from "../Offer/Offer";
import menuImg from '/images/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>foodparadise | Menu</title>
            </Helmet>

            <Cover img={menuImg} title={'OUR MENU'} ></Cover>
            <Offer></Offer>
            <Cover img={menuImg} title={'OUR MENU'} ></Cover>
            <Offer></Offer>
            <Cover img={menuImg} title={'OUR MENU'} ></Cover>
            <Offer></Offer>
            <Cover img={menuImg} title={'OUR MENU'} ></Cover>
            <Offer></Offer>
            
        </div>
    );
};

export default Menu;