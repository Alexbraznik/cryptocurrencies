import styles from "./Aside.module.scss";
import { reviews } from "../assets";
import Image from "next/image";

export function Aside(): JSX.Element {
  return (
    <aside className={styles.aside}>
      <div className={styles.items}>
        {reviews.map((item) => (
          <div
            key={item.id}
            className={`${styles.item} ${item.odd ? styles.item__odd : ""}`}
          >
            <div className={styles.item__person}>
              <Image
                src={item.photo}
                alt={item.name + " profile picture"}
                width={48}
                height={48}
              ></Image>
              <h5>
                {item.name} <br /> <span>{item.twitter}</span>
              </h5>
            </div>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
