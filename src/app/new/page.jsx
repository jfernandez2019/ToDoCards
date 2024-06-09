"use client";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
const NewPage = ({ params }) => {
  const statusOptions = ['Por Hacer', 'En Proceso', 'Hecho'];
  const router = useRouter();
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [status, setstatus] = useState('Por Hacer')
  const [priority, setpriority] = useState(0)

  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then(res => res.json())
        .then(data => {
          settitle(data.title);
          setdescription(data.description);
          setstatus(data.status);
          setpriority(data.priority);
        })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault() //para que no refresque la pagina
    if (params.id) {
      const res = await fetch(`/api/task/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description, priority, status }),
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        }
      })
      const data = await res.json();
      router.push('/');
      router.refresh();
    } else {
      const res = await fetch('/api/task', {
        method: 'POST',
        body: JSON.stringify({ title, description, priority, status }),
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        },
      });
      const data = await res.json();
      router.push('/');
      router.refresh();
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/2 md:w-1/2"
        onSubmit={handleSubmit}>
        <label htmlFor="title"
          className="font-bold text-sm" >
          Titulo de la tarea
        </label>
        <input id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Titulo"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description"
          className="font-bold text-sm">
          Descripcion de la tarea
        </label>
        <textarea id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe tu tarea"
          onChange={(e) => setdescription(e.target.value)}
          value={description}>
        </textarea>
        <label htmlFor="priority"
          className='ml-4'>
          Prioridad
        </label>
        <input id="priority"
          className='border border-gray-400 p-2 ml-3 mb-4 w-10 text-black'
          onChange={(e) => { setpriority(Number(e.target.value))}}
          value={priority}>
        </input>
        <label htmlfor="Estado"
          className="font-bold text-sm ml-4">Estado
        </label>
        <select
          id="Status"
          value={status}
          onChange={(e) => setstatus(e.target.value)}
          className="border border-gray-400 p-2 ml-2 mb-4 w-1/2 text-black"
        >
          <option value="">Seleccionar Estado</option>
          {statusOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type='submit'
          >{params.id ? 'Actualizar' : 'Crear'}
          </button>
          {
            params.id && (
              <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4'
                type='button'
                onClick={async () => {
                  const res = await fetch(`/api/task/${params.id}`, {
                    method: 'DELETE'
                  })
                  const data = await res.json()
                  router.push('/');
                  router.refresh();
                }}>
                Eliminar
              </button>
            )
          }
        </div>
      </form>
    </div>
  );
}

export default NewPage;