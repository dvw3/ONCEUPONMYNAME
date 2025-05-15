import { Hero } from "@/components/Hero";
import { CategoryList } from "@/components/CategoryList";
import { FeaturedBooks } from "@/components/FeaturedBooks";
import { NewArrivals } from "@/components/NewArrivals";
import { AgeSelector } from "@/components/AgeSelector";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryList />
      <FeaturedBooks />
      <AgeSelector />
      <NewArrivals />
      <Newsletter />
    </>
  );
}