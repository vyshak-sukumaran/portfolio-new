import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const BlockContainer = ({ children, ...customMeta }) => {
    const router = useRouter()

    const meta = {
        title: "Vyshak Sukumaran",
        description: "I have been developing web applications for almost 2 years",
        image: "/logo.svg",
        type: "website",

        ...customMeta
    }
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://vyshaksukumaran.online${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://vyshaksukumaran.online${router.asPath}`}
                />
                <link rel="icon" type="image/svg+xml" href="/logo.svg" />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Manu Arora" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@VyshakS2000" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}


            </Head>
            <main className='max-w-[1366px] h-max bg-white mx-auto relative 2xl:border-x-[1px] 2xl:border-gray'>
                {children}
            </main>
        </>
    )
}

export default BlockContainer