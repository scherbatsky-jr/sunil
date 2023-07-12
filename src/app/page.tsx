import styles from './page.module.css'

import About from "@/components/about";
import Contact from '@/components/contact';
import Landing from "@/components/landing";
import Menu from '@/components/menu';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <Landing />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
