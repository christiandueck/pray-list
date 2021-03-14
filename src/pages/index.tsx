import Head from 'next/head'
import { AddButton } from '../components/Shared/AddButton'
import { Header } from '../components/Header/'
import { PrayTime } from '../components/PrayTime/'

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Praylist</title>
        </Head>

        <Header />
        <PrayTime />
      </div>
      <AddButton />
    </>
  )
}
