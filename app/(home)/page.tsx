import BlogFooter from "@/components/home/blog-footer";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
      <Navbar />
      <HeroSection />
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"> Featured Articles</h2>
            <p>Discover our most popular and trending content</p>
          </div>
          <TopArticles />
          <div className="text-center">
            <Link href={'/articles'}>
              <Button className="mx-auto mt-8 flex items-center justify-center rounded-full px-8 py-6 text-lg dark:text-gray-900 bg-white hover:bg-gray-900 hover:text-white dark:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>

      </section>
      <BlogFooter />
    </div>

  );
}
