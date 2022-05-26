import Head from 'next/head'

const TemplateHead = ({ title, description, image, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta  property="og:image" content={image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}
export default TemplateHead
