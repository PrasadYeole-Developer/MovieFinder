"use client";

import { useState } from "react";
import Link from "next/link";

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-[2rem]">
      <h2 className="text-6xl font-black mb-10">
        Welcome to About Page
      </h2>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-5 border-2 py-2 px-3 border-gray-700 hover:border-gray-400"
      >
        Counter : {count}
      </button>
      <div className="mt-[1rem] hover:text-gray-200">
        <Link href="/" className="underline underline-offset-2">
          Go back to Home
        </Link>
      </div>
      <p className="text-sm text-gray-400 mt-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        cumque, beatae voluptatum labore quia perspiciatis voluptatem suscipit
        sed deserunt magnam accusantium molestiae enim at numquam debitis iusto
        omnis error iste repellendus veritatis totam, officiis temporibus
        laborum. Tempore, sapiente dicta voluptatum nobis dolorum quam, quidem
        officia eum dolore doloribus amet accusantium omnis corrupti dolor
        dignissimos sint culpa ut, animi deserunt et. Delectus vero voluptatibus
        tempore. Veniam minima, fuga reiciendis reprehenderit deserunt,
        molestiae totam voluptatibus veritatis est provident delectus debitis
        quia unde rerum quam sequi at voluptatum, ut inventore doloremque sunt.
        Dignissimos, natus saepe? Assumenda eius qui dolorem aut eos! Commodi
        repudiandae quos itaque, beatae officia doloribus error ducimus maiores
        nesciunt harum. Necessitatibus mollitia, laudantium qui atque labore
        porro consequatur aliquid ducimus eius commodi, deserunt impedit unde
        delectus officiis harum velit, distinctio pariatur obcaecati! Labore
        recusandae optio sunt molestias unde possimus quisquam nulla sit illo
        consequatur dignissimos aliquid inventore quia, minima aspernatur
        tempora voluptatibus. Numquam eveniet ipsa dolorum? Mollitia incidunt
        numquam sint voluptates cupiditate possimus saepe facilis autem
        architecto, sunt, nobis quam nisi non fugit obcaecati corporis officia
        minima cumque! Non modi illo aut sequi, qui maiores quasi at inventore,
        fugiat necessitatibus maxime ab obcaecati veritatis enim quos
        perferendis officiis. Sit, cumque? Tempore repudiandae sunt quis
        molestias rerum iste ipsum minima modi inventore totam quam facilis,
        excepturi odio iusto esse, sit tempora saepe nemo hic aspernatur nam
        adipisci nihil harum cupiditate! At.
      </p>
    </div>
  );
};
export default About;
