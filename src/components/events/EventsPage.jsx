import React from "react";
import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((item) => {
        return (
          <Link key={item.id} href={`/events/${item.id}`}>
            <div className="card">
              <Image
                width={300}
                height={250}
                src={item.image}
                alt={item.title}
              />
              <h2>{item.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default EventsPage;
