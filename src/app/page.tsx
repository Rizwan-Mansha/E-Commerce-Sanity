import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { Image as IIamge } from "sanity";
import { urlForImage } from "../../sanity/lib/image";

interface IProduct {
  _id: string;
  price: number;
  title: string;
  image: IIamge;
  category: {
    name: string;
  };
}

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
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

const Home = async () => {
  const data: IProduct[] = await getProductData();

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
          <button className="border py-2 px-6 bg-cyan-500 rounded text-white text-base">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
