import Head from 'next/head'

const TemplateHead = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}
export default TemplateHead
