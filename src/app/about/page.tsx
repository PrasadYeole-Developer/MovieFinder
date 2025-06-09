"use client";

import { useState } from "react";
import Link from "next/link";

const About = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-[2rem]">
      <h2 className="text-6xl font-black mb-10">Welcome to About Page</h2>
      <button onClick={() => setCount(count + 1)} className="mt-5 border-2 py-2 px-3 border-gray-700 hover:border-gray-400">
        Counter : {count}
      </button>
      <div style={{ marginTop: "1rem" }}>
        <Link href="/" className="underline underline-offset-2">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};
export default About;
