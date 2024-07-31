export default function Home() {
  return (
    <div className={"relative h-screen flex justify-center items-center flex-col gap-6 max-md:mx-12"}>
      <h1 className={"text-2xl text-center"}>
        Rsnext, The Rspack based Next.js Template.
      </h1>
      <a href="https://github.com/substancelabs/rsnext" target="_blank" rel="noreferrer">
        <button className={"bg-white/95 border text-black rounded-full px-4 py-2 shadow-lg font-bold hover:bg-black hover:text-white hover:border-white"}>
          Star on GitHub
        </button>
      </a>
    </div>
  );
}
