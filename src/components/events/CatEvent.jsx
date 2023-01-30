import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function CatEvent({ data, pageName })

console.log(pageName, "this is page name");

  return (
    <div>
      <h2>Events in {pageName}</h2>
      {data.map((item) => (
        <Link key={item.id} href={`/events/${item.city}/${item.id}`}>
          <Image src={item.image} alt={item.title} width={300} height={300} />
          <h2>{item.title} </h2>
        </Link>
      ))}
    </div>
  );

