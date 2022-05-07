import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minus commodi facilis
        nihil sapiente beatae aspernatur repellendus deserunt atque quod nulla, vel molestias fugiat
        ullam ipsa unde. Qui, quae ipsa. Facilis necessitatibus perspiciatis dolorum ea praesentium
        dolor illum? Ipsum culpa delectus eaque dolorem. Inventore nulla enim hic reprehenderit,
        sequi, quo non dolorem dicta et esse quasi omnis nemo delectus ducimus?
      </p>
    </Layout>
  );
}
