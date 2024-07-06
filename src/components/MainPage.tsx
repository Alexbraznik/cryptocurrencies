import Link from "next/link";
import styles from "./MainPage.module.scss";
import {
  AppStoreIcon,
  Bitcoin,
  Ethereum,
  GooglePlayIcon,
  Litecoin,
} from "./main-page/assets";
import { Aside } from "./";
import { useEffect, useState } from "react";

export function MainPage(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 320);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>
          Do you want to Learn more About cryptocurrencies{" "}
          <span>
            quickly and easily <span>?</span>
          </span>
        </h1>

        <h4>Subscribe to our channel to learn more</h4>

        <div className={styles.benefits}>
          <div>
            <h3>20K+</h3>
            <p>subscribers</p>
          </div>
          <div>
            <h3>19,5K</h3>
            <p>successful cases</p>
          </div>
          <div>
            <h3>4.8/5</h3>
            <p>rating</p>
          </div>
        </div>
        <button className={styles.join}>Join Whatsapp</button>

        <footer className={styles.download}>
          <Link href="#" className={styles.download__link}>
            <GooglePlayIcon className={styles.googleIcon} />
            <p>
              get it on <br />
              <span>Google play</span>
            </p>
          </Link>
          <Link href="#" className={styles.download__link}>
            <AppStoreIcon className={styles.appIcon} />
            <p>
              {isMobile ? "get it on" : "Available on"} <br />
              <span>App Store</span>
            </p>
          </Link>
        </footer>

        <Aside />

        <Bitcoin className={styles.bitcoin} />
        <Litecoin className={styles.litecoin} />
        <Ethereum className={styles.ethereum} />
      </div>
    </main>
  );
}
