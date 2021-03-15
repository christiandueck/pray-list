import Head from 'next/head'
import AddButton from '../components/Shared/AddButton'
import Header from '../components/Header/'
import PrayTime from './PrayTime/components'

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>É tempo de orar | Praylist</title>
        </Head>

        <Header />
        <PrayTime />
      </div>
      <AddButton />
    </>
  )
}
