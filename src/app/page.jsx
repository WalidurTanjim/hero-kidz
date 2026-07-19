import Banner from "@/components/(pages)/Home/Banner/Banner";
import Products from "@/components/(pages)/Home/Products/Products";

export default function Home() {
  return (
    <div className="w-full px-2 md:px-5 lg:px-8 py-10">
      <Banner />
      <Products />
    </div>
  );
}
