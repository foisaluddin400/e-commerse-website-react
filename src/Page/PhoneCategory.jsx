import UseMenu from "../UseHook/UseMenu";
import Smartwatch from "./smartwatch";


const PhoneCategory = () => {
    
    const [menu] = UseMenu()
    // const computer = menu.filter(item => item.category === 'computer')
    // const gaming =  menu.filter(item => item.category === 'gaming')
    // const watch = menu.filter(item=> item.category === 'watch')
    return (
        <div>
            {/* <Smartwatch item = {computer}></Smartwatch>
            <Smartwatch item = {gaming}></Smartwatch>
            <Smartwatch item = {watch}></Smartwatch> */}
        </div>
    );
};

export default PhoneCategory;