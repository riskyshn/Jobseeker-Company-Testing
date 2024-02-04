import { GetServerSideProps } from 'next'

const RedirectPage = () => {
  // This component won't be rendered, as the user will be redirected before it's reached
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    // Perform the redirect
    res.setHeader('Location', 'https://blog.jobseeker.company')
    res.statusCode = 301
    res.end()
  }

  // Return an empty object, as the redirect is handled on the server
  return { props: {} }
}

export default RedirectPage
