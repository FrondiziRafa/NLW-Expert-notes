import logo from '../../assets/logo-nlw-experts.svg'

const NewNoteCard = () => {
  return (
    <div className='rounded-md bg-slate-700 p-5 space-y-6'>
      <span className='text-sm font-medium text-slate-200'>
          Adicionar nota
      </span>
      <p className='text-sm leading-6 text-slate-400'>
          Grave sua nota em áudio que automaticamente será convertida para texto
      </p>
    </div>
  )
}

export default NewNoteCard