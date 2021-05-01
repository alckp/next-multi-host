import Head from 'next/head';

import { useRouter } from 'next/router';

import Header from '../../components/header';
import Footer from '../../components/footer';
export default function Slug({ host, time, slug }) {
  const router = useRouter();

  // Host available on query from router if blocking or fallback
  const query = router.query;

  // Or params
  console.log(host, time, query);

  return (
    <div>
      <Head>
        <title>Next Multi Host Slug Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header host={host} />
      <h1>
        Slugs - Host: <i>{host}</i>
      </h1>
      <p>
        Slug: <i>/slugs/{slug}</i> {' - '}
        Generated At: <i>{time}</i>
      </p>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  // Available on server render
  console.log('getStaticProps', context);

  const host = context.params.host;
  const slug = (context.params.slug || []).join('/');
  const time = Date.now();
  return {
    props: {
      host,
      slug,
      time,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
