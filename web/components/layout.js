import Head from 'next/head'

const Layout = ({ title, children }) => {
    return (
        <div className="bg-gray-700">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-screen flex flex-col justify-center items-center min-h-screen">
                {children}
            </main>
        </div>
    )
}

export default Layout