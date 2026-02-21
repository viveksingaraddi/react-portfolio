import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">

      <section className="flex flex-col items-center justify-center h-screen text-center px-6">

        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Vivek 👋
        </h1>

        <p className="text-xl text-gray-300 max-w-xl">
          Computer Science student & Web Developer. 
          I build real world applications like EventConnect — 
          a platform to connect catering workers and event organizers.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="https://events-connect-pro.vercel.app/"
            className="bg-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600">
            View My Project
          </a>

          <a href="https://github.com/viveksingaraddi"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black">
            GitHub
          </a>
        </div>

      </section>

    </div>
  );
}

export default App;