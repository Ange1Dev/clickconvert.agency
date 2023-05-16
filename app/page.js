import Aboutme from '@/sections/Aboutme'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <Services></Services>
    </main>
  )
}
