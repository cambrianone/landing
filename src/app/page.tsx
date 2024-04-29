export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className={'mb-2 text-5xl font-semibold'}>Cambrian</h1>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>

      <div className="relative flex place-items-center ">
        <ul className="flex flex-wrap mt-3 text-sm font-medium text-neutral-700 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://x.com/cambrianone" target="_blank" className="hover:underline me-4 md:me-6">X</a>
            </li>
            <li>
                <a href="https://docs.cambrian.one" target="_blank" className="hover:underline me-4 md:me-6">Docs</a>
            </li>
            <li>
                <a href="https://cambrianone.substack.com/" target="_blank" className="hover:underline me-4 md:me-6">Substack</a>
            </li>
            <li>
                <a href="https://x.com/gena_with_beard" target="_blank" className="hover:underline">Gena&apos;s X</a>
            </li>
        </ul>
      </div>
    </main>
  )
}
