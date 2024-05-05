import Image from "next/image";
import styles from "./page.module.css";
import { getNews } from "@/actions";

export default async function Home() {
  const news = await getNews();
  return (
    <>
      <h1 className="m-2">NTHYKYLDSS</h1>
      <p className="m-2">A secondary school</p>
      <h2 className="m-2">News</h2>

      <ul className={styles.nobullet}>
        {news.map((news) => (
          <li>
            <h3 className="m-2">{news.title}</h3>
            <p className="m-2"> {news.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
