
import back from '../../assets/home/pic.png'
const BackImgAdd = () => {
    return (
        <div className='bg-black p-7 grid md:grid-cols-2 mt-16'>
            <div className='text-white pt-[50px]'>
                <p className='text-red-500'>Categories</p>
                <h1 className='text-5xl pt-5'>Enhance Your Music Experience</h1>
                <p className='py-3 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Totam nihil dicta voluptatibus similique beatae libero tenetur, fuga voluptates reiciendis nulla?Lorem <br /> ipsum dolor sit amet, consectetur adipisicing elit. Deserunt at saepe reiciendis quae natus neque eveniet <br /> eaque enim ipsam esse? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, beatae.</p>
                <h1 className='text-2xl'>Price : $60</h1>
                <button className='mt-5 px-5 bg-green-800 text-white p-2'>Buy Now</button>
            </div>
            <div>
                <img src={back} alt="" />
            </div>
        </div>
    );
};

export default BackImgAdd;