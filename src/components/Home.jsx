import React from 'react'

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('./src/assets/')] bg-cover bg-center bg-no-repeat">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2 rotate-[30deg]  bg-gradient-to-tr from-[#d64d86] to-[#2c20df] opacity-50 sm:centre-[calc(50%-30rem)] sm:w-[72.1875rem]"/>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Connecting you directly with a local travel expert.{' '}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Continue <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            We make world travel easy
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-500">
            Traveling under your own power and at your own pace, you’ll connect more meaningfully with your destination and have more fun!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Explore Our Tours <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}
