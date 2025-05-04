export default function Home() {
  return (
    <main className="px-[10vw] py-[5vh]">
      <div className='text-balance text-[#313131] max-w-3xl mt-9'>
        <h1 className='text-6xl text-medium mb-8'>
          Hello.
        </h1>

        <h2 className='text-3xl text-medium mb-8'>
          My name is Augusto Yuudi Shiraishi.
        </h2>

        <p className='text-xl font-light mb-4'>
          I am a software developer based in Brazil. My expertise lies in crafting web apps employing cutting-edge technologies.
        </p>

        <p className='text-xl font-light mb-4'>
          In my spare time, I am immersed in the development of <a className="underlined-link" href="https://whizr.app" target="_blank">Whizr</a>, the perfect website to find nearby events.
        </p>

        <p className='text-xl font-light mb-4'>
          You can find most of my side projects in my <a className="underlined-link" href="https://github.com/augustoyuudi" target="_blank">Github</a> page. Feel free to reach out to me on <a className="underlined-link" href="https://www.linkedin.com/in/augustoyuudi/" target="_blank">Linkedin</a> or drop a message at <a className='underlined-link' href="mailto:augustoyuudi@gmail.com">augustoyuudi@gmail.com</a>
        </p>

        <p className='text-xl font-light'>
          Outside of programming I enjoy traveling ✈️ and discovering new culinary experiences 🍜.
        </p>
      </div>
    </main>
  );
}
