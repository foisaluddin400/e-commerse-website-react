import UseMenu from "../UseHook/UseMenu";
import ComputerItem from "./ComputerItem";


const Computer = () => {
    const [menu] = UseMenu()
    const computers = menu.filter(item => item.category === 'computer');
    return (
        <div className="grid grid-cols-4">
            {
                computers.map((computer)=> <ComputerItem computer={computer}></ComputerItem>)
            }
        </div>
    );
};

export default Computer;