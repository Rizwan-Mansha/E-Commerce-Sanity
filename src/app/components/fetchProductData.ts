import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Image as IIamge } from "sanity";


export interface IProduct {
  _id: string;
  price: number;
  title: string;
  image: IIamge;
  category: {
    name: string;
  };
}

const GetProductData = async () => {
  const res = await client.fetch(groq`*[_type=="product"]{
  _id,
  price,
  title,
  image,
  category ->{
    name
  }
}`);
  return res;
 
};


export default GetProductData;
