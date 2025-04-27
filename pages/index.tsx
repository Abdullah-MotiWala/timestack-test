import { useRouter } from "next/router";
import React from "react";
const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`user`);
  };

  return (
    <button onClick={handleClick}>
      Go To User
    </button>
  );
};

export default Home;
