import { useState } from "react";
import UseMenu from "../UseHook/UseMenu";
import OurShopItem from "./OurShopItem";
import UsePublic from "../UseHook/UsePublic"; // Import the hook for API
import TitleSection from "../Shared/TitleSection";

const OurShop = () => {
  const [menu] = UseMenu(); // মেনু ডেটা ফেচ করা
  const axiosPublic = UsePublic(); // সার্চের জন্য API ব্যবহার করা
  const [query, setQuery] = useState(""); // সার্চ বক্সের ভ্যালু স্টোর করা
  const [meals, setMeals] = useState([]); // সার্চ করা খাবারের তথ্য স্টোর করা
  const [searchActive, setSearchActive] = useState(false); // সার্চ অ্যাক্টিভ কিনা সেটি ট্র্যাক করা

  // সার্চ ফাংশন
  const searchMeals = async () => {
    if (query.trim() === "") {
      setSearchActive(false);
      return;
    }
    try {
      const res = await axiosPublic.get(`/menu/search/${query}`); // সার্চ API কল
      setMeals(res.data || []);
      setSearchActive(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
        <div className="mt-11">
            <TitleSection heading='Our Product' title='Explore Our Products'></TitleSection>
        </div>
      <div className="flex justify-center my-5">
        <input
          className="p-2 bg-slate-100"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Your Item...."
        />
        <button className="bg-green-900 text-white px-3" onClick={searchMeals}>
          Search
        </button>
      </div>

      <div className="grid md:grid-cols-4 m-2">
        {/* সার্চ একটিভ থাকলে সার্চ রেজাল্ট দেখাবে, অন্যথায় ডিফল্ট মেনু দেখাবে */}
        {searchActive
          ? meals.map((item) => (
              <OurShopItem key={item._id} item={item}></OurShopItem>
            ))
          : menu.map((item) => (
              <OurShopItem key={item._id} item={item}></OurShopItem>
            ))}
      </div>
    </div>
  );
};

export default OurShop;
