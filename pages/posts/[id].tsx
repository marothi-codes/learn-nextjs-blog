import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({
  postData,
}: {
  postData: { id: string; title: string; date: string; contentHtml: string };
}): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{postData.title} - Learn Next.js Blog</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
        <br />
        {postData.id}
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
