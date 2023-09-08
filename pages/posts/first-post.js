import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import { clsx } from "clsx";

import styles from "./first-post.module.css";

export default function FirstPost({ type = "success" }) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(
            "`script loaded correctly, window.FB has been populated`"
          );
        }}
      ></Script> */}
      <h1
        className={clsx({
          [styles.success]: type === "success",
          [styles.error]: type === "error",
        })}
      >
        My first post
      </h1>
      <Image
        src="/images/profile.jpg"
        height={384} // Desired size with correct aspect ratio
        width={288} // Desired size with correct aspect ratio
        alt="Your Name"
      ></Image>
      <p>
        Back to the <Link href="/">home page</Link>{" "}
      </p>
    </Layout>
  );
}
