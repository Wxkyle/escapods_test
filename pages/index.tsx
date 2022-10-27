import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from './src/header/Header'

export default function Home() {

  return (
    <div className="h-screen w-screen bg-slate-600 flex flex-col">
      <div className="bg-slate-500">
        <Header title="Home" />
      </div>
      <div className='bg-gray-200 flex justify-center items-center flex-grow'>
        <div>Home page – displays a simple welcome text message</div>
      </div>
    </div>
  )
}
