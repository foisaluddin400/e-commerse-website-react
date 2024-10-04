import UseMenu from "../UseHook/UseMenu";
import GamesItem from "./GamesItem";


const Games = () => {
    const [menu] = UseMenu()
    const games = menu.filter(item => item.category === 'gaming');
    return (
        <div className="grid grid-cols-4">
            {
                games.map((game)=> <GamesItem game={game}></GamesItem>)
            }
        </div>
    );
};

export default Games;