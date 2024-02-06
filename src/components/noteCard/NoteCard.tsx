import React from 'react'

export const NoteCard = () => {
  return (
    <div>
        <div className='rounded-md bg-slate-800 p-5 space-y-6 overflow-hidden relative'>
            <span className='text-sm font-medium text-slate-200'>
                Há 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quaerat vitae illum tempore odio excepturi ea voluptatem modi rem harum labore, facilis fugiat et quibusdam adipisci tenetur ab a veritatis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quaerat vitae illum tempore odio excepturi ea voluptatem modi rem harum labore, facilis fugiat et quibusdam adipisci tenetur ab a veritatis!
            </p>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </div>
    </div>
  )
}
