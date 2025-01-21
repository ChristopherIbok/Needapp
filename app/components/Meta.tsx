import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
}

export default function Meta({
  title,
  description,
  keywords,
  author,
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
