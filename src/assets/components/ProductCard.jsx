import React from "react";
import { IoStar } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { addCarts } from "../../store/thunks/productThunk";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ i }) {
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const variation = i?.variations[0];
  const user = useSelector((state) => state.users.users);

  const addCartt = () => {
    if (!user?.username) {
      navigate("/login");
    }
    const cartData = {
      id: variation?.id,
      qty: 1,
      token: token,
    };
    console.log("cartData : ", cartData);
    dispatch(addCarts(cartData));
  };

  return (
    <li className="relative flex flex-col gap-4 basis-12/12 md:basis-5/12 lg:basis-3/12 rounded shadow hover:shadow-lg p-2 pb-8 cursor-pointer">
      <div className="w-[100%]  bg-white/40 rounded-t flex items-center justify-center relative">
        <Link to={`/product-detail/${i.id}`}>
          <img
            src={`${i?.image}`}
            alt={i?.name}
            className="object-contain w-full lg:h-[250px]"
          />
        </Link>
        <div className="text-xs font-semibold text-black/50 p-1 md:p-2 md:px-4 rounded-full shadow absolute top-2 left-2 hover:bg-secondary hover:text-white">
          {variation?.weight}
        </div>
      </div>

      <div className="relative">
        <p className="font-hind text-xs md:text-sm text-black/50 capitalize">
          {i?.product_type_name}
        </p>
        <div className="flex flex-wrap gap-1 justify-between mt-1">
          <Link
            to={`/product-detail/${i.id}`}
            className="capitalize font-medium text-sm md:text-base"
          >
            {i?.name}
          </Link>
          <p className="flex items-center gap-1 text-xs md:text-sm">
            5.0 <IoStar className="text-yellow-400 " />
            <span className="text-secondary ">(112)Reviews</span>
          </p>
        </div>
        <p className="font-hind text-sm text-black/50 capitalize font-bold mt-2">
          <del>{variation?.oldPrice != 0.0 && <>₹{variation?.oldPrice}</>}</del>
          ₹{variation?.price}
        </p>
      </div>
      <button
        className="absolute bottom-1 rounded text-sm font-bold bg-secondary text-white p-1 w-[95%] hover:bg-success"
        onClick={() => addCartt()}
      >
        Add Cart
      </button>
    </li>
  );
}

export default ProductCard;
