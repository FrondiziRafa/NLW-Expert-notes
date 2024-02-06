import logo from '../../assets/logo-nlw-experts.svg'

const NewNoteCard = () => {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="NLW Expert" />
      <form className='w-full'>
        <input 
          type="text" placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none' 
        />
      </form>
      <div className='h-px bg-slate-700'></div>
      <div className='grid grid-cols-3 gap-6 auto-rows-[250px] overflow-hidden'>
        <div className='rounded-md bg-slate-700 p-5 space-y-6'>
          <span className='text-sm font-medium text-slate-200'>
            Adicionar nota
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave sua nota em áudio que automaticamente será convertida para texto
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewNoteCard