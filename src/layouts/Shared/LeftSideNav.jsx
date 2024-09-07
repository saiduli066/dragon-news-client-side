import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://dragon-news-server-saiduli066.vercel.app/category`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>All category</h2>
      {categories.map((category) => (
        <p key={category.id}>
          <Link
            to={`/category/${category.id}`}
            className="text-decoration-none text-black"
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
