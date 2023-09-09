import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <Image
        src="https://asianinspirations.com.au/wp-content/uploads/2019/06/R02325_Chinese_Steamed_Pork_Buns.jpg"
        alt="bun"
        width={"700"}
        height={"500"}
      />
      <Image
        src="https://i.ytimg.com/vi/e-RbEcqQjQA/sddefault.jpg"
        alt="bun"
        width={"700"}
        height={"500"}
      />

      <Image
        src="https://techsparx.com/nodejs/bun/img/test-Bun-Node.js-compatibility-faster-execution.png"
        alt="bun"
        width={"700"}
        height={"500"}
      />

      <Image
        src="https://platform.sh/static/c708023d77ff2ad0cdead23b27855c76/bun_support_twitter_linkedin_bbfc7a59e3.png"
        alt="bun"
        width={"700"}
        height={"500"}
      />
    </main>
  );
}
