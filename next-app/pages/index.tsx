import Head from 'next/head'
import Button from '../style/style-components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button>
          Click Aqui!
        </Button>
      </main>
    </div>
  )
}
