import Herosection from "@/components/header";
import "../app/globals.css";
import SingleCard from "@/components/cards/singlecard";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())

      // collect data in useState
      .then((apidata) => {
        setData(apidata);
      })

      // catch error if api end point is not fetch properly or having some issue
      .catch((error) => console.log("error is :-", error));
  }, []);

  return (
    <>
      <Herosection />
      <SingleCard data={data} />
    </>
  );
}
