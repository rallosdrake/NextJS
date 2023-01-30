import React from "react";
import Image from "next/image";
export default function SingleEvent({ data }) {
  const onClick = () => {
    console.log("cklicked");
  };

  return (
    <h1>
      <div>
        <Image src={data.image} width={500} height={300} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <input type="email" />
        <button onClick={onClick}>Submit</button>
      </div>
    </h1>
  );
}
