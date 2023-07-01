import Category from "@/components/Category";
import Hero from "@/components/Hero";
import NewArrival from "@/components/home/newArrival";
import { useGetCategories } from "@/apis/public";

const Home = () => {
  const { data: categories } = useGetCategories();
  return (
    <div className="container min-h-screen">
      <Hero />
      <NewArrival />
      {categories?.map((cat) => (
        <Category key={cat._id} {...cat} />
      ))}
    </div>
  );
};

export default Home;
