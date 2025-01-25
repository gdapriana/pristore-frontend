import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import Title from "./title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia sint accusamus dignissimos mollitia fugit eos ducimus iure, eveniet ullam.
        </p>
      </div>
    </div>
  )
}

export default LatestCollection;
