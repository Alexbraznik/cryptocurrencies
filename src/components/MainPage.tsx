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

export function MainPage(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>
          Do you want to Learn more About cryptocurrencies
          <span> quickly and easily ?</span>
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

        <div className={styles.download}>
          <Link href="#" className={styles.download__link}>
            <GooglePlayIcon />
            <p>
              get it on <br />
              <span>Google play</span>
            </p>
          </Link>
          <Link href="#" className={styles.download__link}>
            <AppStoreIcon />
            <p>
              Available on the <br />
              <span>App Store</span>
            </p>
          </Link>
        </div>

        <Aside />

        <Bitcoin className={styles.bitcoin} />
        <Litecoin className={styles.litecoin} />
        <Ethereum className={styles.ethereum} />
      </div>
    </main>
  );
}
