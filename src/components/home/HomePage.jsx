import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <>
      <h1>Main Page</h1>
      <div>
        {data.map((item) => {
          return (
            <Link key={item.id} href={`/events/${item.id}`}>
              <Image
                width={200}
                height={100}
                src={item.image}
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
