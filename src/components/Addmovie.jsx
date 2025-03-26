import React, { useState } from 'react'

const Addmovie = () => {
    const [title,setTitle]=useState("")
    const [director,setDirector]=useState("")
    const [genere,setGenere]=useState("")
    const [year,setYear]=useState("")
    const [synopsis,setSynopsis]=useState("")
    const [url,setUrl]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({title,director,genere,year,synopsis,url})
    }
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <label>Director</label>
        <input type="text" value={director} onChange={(e)=>setDirector(e.target.value)} />
      </div>
      <div>
        <label>Genere</label>
        <input type="text" value={genere} onChange={(e) => setGenere(e.target.value)} />
      </div>
      <div>
        <label>Release Year</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)}/>
      </div>
      <div>
        <label>Synopsis</label>
        <input type="text" value={synopsis} onChange={(e) => setSynopsis(e.target.value)}/>
      </div>
      <div>
        <label>Poster Image URL</label>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </div>
    </form>
  )
}

export default Addmovie
