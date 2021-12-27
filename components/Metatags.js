import Head from 'next/head';

export default function Metatags({
  title = 'OverlappCMS',
  description = 'A quick way to input data for users to rate and share',
  image = 'https://img1.wsimg.com/isteam/ip/5269627a-0754-4cb6-a7b2-0747993fd282/foreground_generic_circle_v2.webp',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="overlapp" />
      <meta name="twitter:site" content="@overlapp.ai" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
