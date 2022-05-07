import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
