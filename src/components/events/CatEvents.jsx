import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CatEvent({ data, pageName }) {
  return (
    <div className="cat_events">
      <h1>Events in {pageName}</h1>
      <div className="content">
        {data.map((item) => (
          <Link key={item.id} href={`/events/${item.city}/${item.id}`}>
            <div className="card">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
              />

              <h2>{item.title} </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
