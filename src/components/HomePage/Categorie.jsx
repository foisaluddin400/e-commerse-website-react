import { CiMobile4 } from "react-icons/ci";
import TitleSection from "../../Shared/TitleSection";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; // Import motion

const Categorie = () => {
  return (
    <div>
      <div className="mt-11">
        <TitleSection
          heading="Category"
          title="Browse By Category"
        />
      </div>

      <div className="md:flex gap-6 mt-7 justify-center">
        <Link to='/computer'>
          <motion.div
            className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center"
            initial={{ opacity: 0, scale: 0.8 }} // Start from small and invisible
            whileInView={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
            transition={{ duration: 0.3 }} // Animation duration
          >
            <div>
              <div className="flex justify-center">
                <CiMobile4 className="md:text-4xl text-[70px]" />
              </div>
              Computer
            </div>
          </motion.div>
        </Link>
        <Link to='/smartphone'>
          <motion.div
            className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center"
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <div>
              <div className="flex justify-center">
                <CiMobile4 className="md:text-4xl text-[70px]" />
              </div>
              Smartphone
            </div>
          </motion.div>
        </Link>
        <Link to='/headphones'>
          <motion.div
            className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center"
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <div>
              <div className="flex justify-center">
                <CiMobile4 className="md:text-4xl text-[70px]" />
              </div>
              Headphones
            </div>
          </motion.div>
        </Link>
        <Link to='/camera'>
          <motion.div
            className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center"
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <div>
              <div className="flex justify-center">
                <CiMobile4 className="md:text-4xl text-[70px]" />
              </div>
              Camera
            </div>
          </motion.div>
        </Link>
        <Link to='/gaming'>
          <motion.div
            className="border mt-2 border-slate-300 flex justify-center md:w-[110px] w-[70%] rounded-md h-[200px] m-auto md:h-[100px] items-center"
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <div>
              <div className="flex justify-center">
                <CiMobile4 className="md:text-4xl text-[70px]" />
              </div>
              Gaming
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Categorie;
