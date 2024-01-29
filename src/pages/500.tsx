import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const ServerError: React.FC = () => {
  return (
    <>
      <Head>
        <title>500 - Server-Side Error Occurred</title>
        <meta name="description" content="The page you requested was not found." />
      </Head>
      <section className="flex h-screen w-full">
        <div className="container flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-2 text-[100px] font-bold leading-none tracking-wide md:text-[150px]">
              <span className="text-primary">5</span>
              <span className="text-secondary">0</span>
              <span className="text-primary">0</span>
            </h1>
            <h2 className="mb-6 text-2xl font-light tracking-wide text-gray-800 md:text-4xl">Server-Side Error Occurred</h2>
            <Link
              href="/"
              className="inline-block rounded-full bg-secondary-light px-6 py-2 text-center text-white transition-colors hover:bg-secondary-light/80"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServerError
