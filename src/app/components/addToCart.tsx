"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { IProduct } from "./fetchProductData";
import GetProductData from "./fetchProductData";

const AddToCart = () => {
  const [data, setData] = useState<IProduct[]>([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const productData: IProduct[] = await GetProductData();
      setData(productData);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-20 p-5">
      {data.map((item) => (
        <div key={item._id}>
          <Image
            width={300}
            height={200}
            className="max-h-[350px] object-cover"
            src={urlForImage(item.image).url()}
            alt="product"
          />
          <h2 className="font-semibold">{item.title}</h2>
          <h3 className="font-semibold">${item.price}.00</h3>
          <button className="border py-2 px-6 bg-cyan-500 rounded text-white text-base">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
