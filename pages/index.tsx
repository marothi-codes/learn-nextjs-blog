import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { GetStaticProps } from 'next';

export default function Home({
  allPostsData,
}: {
  allPostsData: { date: string; title: string; id: string }[];
}): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I build cool things! Whatever project I'm challenged with, my goal is to do it excellently
          even some challenges are learning experiences but I aim to excel in all that I do. I build
          aswesome useful things by smashing challengines, growing and extending the ceiling of my
          limits.
        </p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
