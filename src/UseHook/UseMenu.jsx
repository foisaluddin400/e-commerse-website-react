import { useQuery } from '@tanstack/react-query';

import UsePublic from './UsePublic';

const UseMenu = () => {
    const axiosPublic = UsePublic();
    
    // const[menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=> res.json())
    //     .then(data => setMenu(data))
    // })

    const { data: menu =[],isLoading, refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        },
        onError: (err) => {
            console.error("Error fetching menu:", err); // Error handling
        }
    })

    return [menu ,isLoading, refetch];
};

export default UseMenu;