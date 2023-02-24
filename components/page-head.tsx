import Head from "next/head";

export default function PageHead() {
  return (
    <Head>
      <title>Staff picks</title>
      <link
        rel="shortcut icon"
        href={`${process.env.assetPrefix}/favicon.svg`}
      />
    </Head>
  );
}
