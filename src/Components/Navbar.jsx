import Link from 'next/link'
import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
export const Navbar = () => {
  return (
    <nav className= " bg-slate-800 p-4 ">
      <div className='container mx-auto flex justify-between items-center'>
        <h3 className='font-bold text-3xl text-white'>Next - Tareas</h3>
        <ul className="flex gap-6">
            <li className="mr-6">
                <Link href="/" 
                  className="flex items-center text-white hover:text-blue-400 px-3 py-2 rounded transition duration-300">
                  <AiOutlineHome className="mr-2" />
                  Lista de tareas</Link>
                
            </li>
            <li className="mr-6">
                <Link href="/new" 
                className="flex items-center text-white hover:text-blue-400 px-3 py-2 rounded transition duration-300">
                  <AiOutlinePlus className="mr-2" />
                  Nueva Tarea</Link>
                
            </li>
        </ul>
      </div>
    </nav>
  )
}
