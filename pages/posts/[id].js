import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Layout from '../../components/layout';

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

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
