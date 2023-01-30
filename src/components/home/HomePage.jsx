import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <>
      <h1>Main Page</h1>
      <div className="home_body">
        {data.map((item) => {
          return (
            <Link key={item.id} href={`/events/${item.id}`} className="card">
              <div className="image">
                <Image
                  width={300}
                  height={350}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
