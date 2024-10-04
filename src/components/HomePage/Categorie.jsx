import { CiMobile4 } from "react-icons/ci";
import TitleSection from "../../Shared/TitleSection";
import { Link } from "react-router-dom";
const Categorie = () => {
  return (
    <div>
      <div className="mt-11">
      <TitleSection
        heading="Category"
        title="Browse By Category"
      ></TitleSection>
      </div>

      <div className="md:flex gap-6 mt-7 justify-center">
      <Link to='/computer'><div className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center">
          <div>
            <div className="flex justify-center">
            <CiMobile4 className="md:text-4xl text-[70px] " />
            </div>
            Computer
          </div>
        </div></Link>
        <Link to='/computer'><div className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center">
          <div>
            <div className="flex justify-center">
            <CiMobile4 className="md:text-4xl text-[70px] " />
            </div>
            Computer
          </div>
        </div></Link>
        <Link to='/computer'><div className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center">
          <div>
            <div className="flex justify-center">
            <CiMobile4 className="md:text-4xl text-[70px] " />
            </div>
            Computer
          </div>
        </div></Link>
        <Link to='/computer'><div className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center">
          <div>
            <div className="flex justify-center">
            <CiMobile4 className="md:text-4xl text-[70px] " />
            </div>
            Computer
          </div>
        </div></Link>
        <Link to='/computer'><div className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center">
          <div>
            <div className="flex justify-center">
            <CiMobile4 className="md:text-4xl text-[70px] " />
            </div>
            Computer
          </div>
        </div></Link>
        
      </div>
    </div>
  );
};

export default Categorie;
