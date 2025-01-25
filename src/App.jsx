import './App.css'

function App() {

  return (
    <div className='bg-zinc-900 h-screen w-full flex items-center justify-center'>

      <div className='flex w-3/5 bg-black rounded-2xl drop-shadow-2xl gap-4'>

        {/* Lado esquerdo */}
        <div className='w-1/2 flex flex-col justify-center  px-12 py-12'>
          <div className='flex items-end justify-center'>
            <h1 className='text-white text-4xl font-bold text-center'>Faça seu login</h1>
            <div className="bola w-2 h-2 bg-white rounded-full"></div>
          </div>

          <form className='mt-8 w-full max-w-md flex flex-col'>
            <div>
              <span className='text-zinc-400 text-sm font-bold'>E-mail</span>
              <input className='w-full px-3 mt-2 py-2 text-sm text-white bg-zinc-900 rounded-xl h-[54.94px]' type='email' placeholder='E-mail' />
            </div>

            <div className='flex flex-col mt-10'>
              <span className='text-zinc-400 text-sm font-bold'>Password</span>
              <input className='w-full h-[54.94px] px-3 py-2 text-sm text-white bg-zinc-900 rounded-xl mt-2' type='password' placeholder='Senha' />
            </div>

            <a href='' className='text-end text-md mt-6 text-zinc-400 underline'>Esqueci minha Senha</a>
            <button className='w-full mt-6 h-[54.94px] px-3 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-700'>Login</button>
          </form>

          <p className='text-center text-md mt-6 text-zinc-400 underline'>Ainda não tem uma conta?</p>
        </div>

        {/* Lado direito */}
        <div
          className='w-1/2 rounded-2xl bg-cover bg-center'
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url("/img/image.png")'
          }}
        >
        </div>


      </div>

    </div>
  )
}

export default App
