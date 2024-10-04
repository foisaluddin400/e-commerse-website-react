import UseMenu from "../UseHook/UseMenu";
import CamerasItem from "./CamerasItem";

const Camera = () => {
    const [menu] = UseMenu()
    const cameras = menu.filter(item => item.category === 'camera');
    return (
        <div className="grid grid-cols-4">
            {
                cameras.map((camera)=> <CamerasItem camera={camera}></CamerasItem>)
            }
        </div>
    );
};

export default Camera;