import React from "react";
import Image from "next/image";

export default function EventCards({ item }) {
  return (
    <div className="content">
      <Image
        className="card"
        src={item.image}
        alt={item.title}
        width={300}
        height={300}
      />
    </div>
  );
}
