import { TfiWorld } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from "react"
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
function Header() {

    const [dropdown, setDropdown] = useState(false)

    const items = [
             { label: "Home" },
            { label: "Products" },
              { label: "Blogs" },
               { label: "Contact" },
               { label: "Pages" },
           ]
      
    const toggleMobileMenu = () => {
        setDropdown(!dropdown);
    };
    return (
      <div>
        <div className={dropdown ? "bg-secondary z-[99] flex flex-col transition-all lg:hidden duration-300 gap-4 ps-2 fixed top-0 left-0 h-full w-[85%]" : "'bg-[#3F6955] flex flex-col gap-4 z-[99] ps-2 fixed top-0 -left-full transition-all lg:hidden duration-300 h-full w-[85%]'"}>
       <div className="mt-3 flex justify-end pe-5">
       <IoCloseOutline onClick={toggleMobileMenu}  className="text-2xl" />
       </div>
                <div className='mt-3'>
                    <ul className='flex flex-col ps-4 gap-4 '>
                        {items.map((item, index) => {
                            return <li className='font-poppins text-gray-700 hover:text-primary font-light text-sm' key={index}>{item.label}</li>
                        })}
                    </ul>
                </div>
</div>
  <div className='bg-primary  py-5   flex justify-between px-4   items-center'>
            <FaBarsStaggered  onClick={toggleMobileMenu} className="text-3xl text-secondary lg:hidden"/>
            <div> 
              <h1 className="font-roboto text-4xl text-secondary ">Thaaragai</h1>
            </div>   
            <div className="hidden lg:flex">
              <div className="w-[600px] h-[44px] rounded-l bg-white ps-4 flex items-center justify-center">
                <input type="search" placeholder="What are you looking for ?" className="bg-transparent w-full  outline-none border-none" />
              </div>
              <button className="px-6 h-[44px] bg-[#678d37] text-secondary rounded-r ">SEARCH</button>
            </div>
           <div className="flex gap-2">
           <FaOpencart className="text-3xl cursor-pointer text-secondary" />
            <p className=" font-poppins text-secondary">(0)</p>
           </div>
      </div>
      <hr className=" border-gray-400 hidden lg:block" />
     <div className="bg-primary p-4 hidden lg:block">
     <div className='hidden lg:block'>
                <ul className='flex gap-8'>
                    {items.map((item, index) => {
                       
                        return <li className='font-poppins text-secondary  ' key={index}>
                             <Link to={item.path}>{item.label}
                             </Link></li>
                    })}
                </ul>
            </div>
     </div>
      </div>

      
    )
}

export default Header