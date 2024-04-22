import { BiSolidDashboard } from "react-icons/bi";
import { BsBagFill } from "react-icons/bs";
import { ImList2 } from "react-icons/im";
import { FaShoppingCart, FaTruckMoving, FaUserTie } from "react-icons/fa";



const dashboardList = [
    {
      id: 1,
      list: "Dashboard",
      icon: <BiSolidDashboard />,
      link : ""
    },
    {
      id: 2,
      list: "Order",
      icon: <FaShoppingCart />,
      link : "order"
    },
    {
      id: 3,
      list: " New Products",
      icon: <BsBagFill />,
      dropDown: {
        droplist: "ProductList",
      },
      link : "newproduct"
    },
    {
      id: 4,
      list: "Category",
      icon: <ImList2 />,
      link : "category"
    },
    {
      id: 5,
      icon: <FaTruckMoving />,
      list: "Shipping",
      link : "shipping"
    },
    {
      id: 6,
      icon: <FaUserTie />,
      list: "Customer",
      link : "customer"
    },
  ];

  export default dashboardList