import { Link } from "react-router-dom";
import OurShopItem from "../../Page/OurShopItem";
import UseMenu from "../../UseHook/UseMenu";
import TitleSection from "../../Shared/TitleSection";


const MenuShop = () => {
    const [menu] = UseMenu();
    return (
        <div>
            <div className="pt-[70px] pb-[30px]">
                <TitleSection heading='Our Products' title='Explore Our Products'></TitleSection>
            </div>
            <div className="grid md:grid-cols-4 m-2">
            {
                // Slice the first 8 items from the menu array
                menu.slice(0, 8).map((item) => (
                    <OurShopItem key={item._id} item={item}></OurShopItem>
                ))
            }
            
        </div>
        <div className="text-center mt-[40px]">
        <Link to='/shop' className="bg-red-500 text-white px-6 py-2">View All</Link>
        </div>
        </div>
    );
};

export default MenuShop;