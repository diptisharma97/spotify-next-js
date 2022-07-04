import Head from 'next/head'
import Image from 'next/image'
import Center from '../Components/Center'
import Sidebar from '../Components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className="bg-black h-screen overflow-hidden">
    <main className="flex ">
      {/* sidebar */}
      <Sidebar/>
      {/* leftbar */}
      <Center/>
    
    </main>
    </div>

    </>
  )
}
