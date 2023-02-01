import React, { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function SingleEvent({ data }) {
  const inputEmail = useRef();

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router.query.id;

    try {
      const response = await fetch(`/api/email-registered`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="event-single-page">
      <Image src={data.image} width={500} height={300} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email-registration">
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Sign up here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
