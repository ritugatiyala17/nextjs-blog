import Layout from "../../components/layout.js";

export async function getStaticProps({ params }) {
  console.log("Contact Name getStaticProps", params);
  return {
    props: {
      data: { ...params },
    },
  };
}

export async function getStaticPaths({ paths }) {
  console.log("Contact Name getStaticPaths", paths);
  return { paths: ["/contact/ritu", "/contact/gaurav"], fallback: false };
}

export default function ContactName({ data }) {
  return (
    <Layout>
      <ul>
        <li>{data.name}</li>
      </ul>
    </Layout>
  );
}
