import { MenuToggle } from "./MenuToggle";
import { motion, useCycle } from "framer-motion";
import K from "@/constants";
import { Link } from "react-router-dom";

const itemsVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const SideBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      className="lg:hidden cursor-pointer flex flex-col items-center"
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <MenuToggle toggle={toggleOpen} />
      <motion.ul
        variants={itemsVariants}
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-5 text-[#471AA0] absolute top-16 right-0 bg-white px-10 py-4 z-50 items-center shadow-md`}
      >
        {K.NAVLINKS.map((item) => (
          <motion.li variants={itemVariant} whileHover={{ scale: 1.1 }}>
            <Link to={item.link}>{item.name}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SideBar;
