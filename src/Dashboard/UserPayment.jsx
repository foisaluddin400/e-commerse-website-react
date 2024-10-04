import Useadress from "../UseHook/Useadress";


const UserPayment = () => {
    const[adress] = Useadress()
    return (
        <div>
            payment
            {
                adress.map((item)=> <>{item.name}</>)
            }
        </div>
    );
};

export default UserPayment;