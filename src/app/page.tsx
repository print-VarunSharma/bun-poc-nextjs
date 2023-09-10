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
        src="https://storage.googleapis.com/images-kkg-prd-dbdfdde.kkg.prd.v8.commerce.mi9cloud.com/product-images/zoom/2baba777-70ba-437f-b758-f727905c2789.jpeg"
        alt="bun"
        width={"700"}
        height={"500"}
      />
      <div>
        <h1>Wow I Cant believe its not Node.JS</h1>
        <p>The speed of bun.sh is absolute insane how fast it is!</p>
        <a href="https://play-auris.notion.site/Tech-Spike-Using-an-alternative-JS-runtime-environment-to-improve-app-performance-64186448f04b4708b0498857ed3acbc5?pvs=4">
          <h3>Read more about this Bun in the Oven POC here</h3>
        </a>
      </div>
      <Image
        src="https://i.ytimg.com/vi/Rp5yvwX7orE/maxresdefault.jpg"
        alt="bun"
        width={"700"}
        height={"500"}
      />

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
      <h2>OH and this is deployed on Vercel running on BUN.sh!</h2>
    </main>
  );
}
