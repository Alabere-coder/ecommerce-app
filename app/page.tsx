"use client";

import Image from "next/image";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero/Hero";
import Category1 from "./components/category/Category1";
import Category2 from "./components/category/Category2";
import Category3 from "./components/category/Category3";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Category4 from "./components/category/Category4";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer/Footer";

interface Item {
  id: number;
  title: string;
  price: number;
  addNumber?: number;
  image: string;
  category: string;
  description: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [addedItems, setAddedItems] = useState<Item[]>([]);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item: Item) {
    item.addNumber = 1;
    setAddedItems([...addedItems, item]);
  }

  function removeItem(item: Item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItems(newItems);
  }

  return (
    <main className=" min-h-screen">
      <div className="h-10 bg-black"></div>
      <Navbar />
      <Banner />
      <Services />
      {/* <Hero /> */}
      {/* <Banner /> */}
      <Category1 />
      <Category2 />
      <Category3 />
      <Category4 />
      <Blogs />
      <Footer />
    </main>
  );
}
