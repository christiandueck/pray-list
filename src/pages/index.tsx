import Head from 'next/head'
import { Header } from '../components/Header'
import { PrayTime } from '../components/PrayTime'

export default function Home() {
  return (
    <>
      <Head>
        <title>Praylist</title>
      </Head>

      <Header />
      <PrayTime />
    </>
  )
}
