import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
function Chakra() {
  const data = useSelector((state) => state.product.product.products);
  const speakers = data.filter((e) => e.category === "speakers").reverse();
  const earphones = data.filter((e) => e.category === "earphones");
  return (
    <div className="w-3/4 mb-10 mx-auto">
      {speakers[0] && (
        <div className="h-[595px] w-[1110px] relative bg-orange mx-auto rounded-xl overflow-hidden ">
          <img
            className="w-[600px] h-[700px] absolute bottom-[-230px] ml-18"
            src={speakers[0].cartImage}
            alt="speaker"
          />
          <div className="absolute right-[-80px] h-full flex flex-col justify-center text-white">
            <h1 className="text-8xl w-3/4">{speakers[0].name}</h1>
            <p className="w-80 mt-8 text-[#ffffffbf]">
              {speakers[0].description}
            </p>
            <Link to={"/speakers/" + speakers[0].slug}>
              <Button dark>SEE PRODUCT</Button>
            </Link>
          </div>
        </div>
      )}
      {speakers[1] && (
        <div className="my-10 ml-40 relative">
          <img src={speakers[1].categoryImage.desktop} alt="category" />
          <div className="absolute top-32 left-28">
            <p className="text-3xl "> {speakers[1].name} </p>
            <Link to={"/speakers/" + speakers[1].slug}>
              <Button outline>SEE PRODUCT</Button>
            </Link>
          </div>
        </div>
      )}

      {earphones[0] && (
        <div className="w-3/4 mb-10 mx-auto flex justify-between ">
          <img
            className="w-[540] h-80 rounded-lg"
            src={earphones[0].gallery.second.desktop}
            alt={earphones[0].name}
          />
          <div className="w-2/4 bg-[#F1F1F1] rounded-lg flex flex-col justify-center items-center">
            <p className="font-bold text-2xl"> {earphones[0].name} </p>
            <Link to={"/earphones/" + earphones[0].slug}>
              <Button outline>SEE PRODUCT</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chakra;
