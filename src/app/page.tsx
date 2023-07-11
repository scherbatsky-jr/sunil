import styles from './page.module.css'

import About from "@/components/about";
import Landing from "@/components/landing";
import Menu from '@/components/menu';

export default function Home() {
  return (
    <main>
      <Menu />
      <Landing />
      <About />
    </main>
  )
}
