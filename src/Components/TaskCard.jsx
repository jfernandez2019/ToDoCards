"use client";
import { useRouter } from 'next/navigation'
const TaskCard = ({ task }) => {

    const router = useRouter();
    const getStatusColor = (status) => {
        switch (status) {
            case 'Por Hacer':
                return 'text-red-500'; // Rojo para "Por Hacer"
            case 'En Proceso':
                return 'text-yellow-500'; // Amarillo para "En Proceso"
            case 'Hecho':
                return 'text-green-500'; // Verde para "Hecho"
            default:
                return 'text-gray-500'; // Gris para estados desconocidos
        }
    };
    return (
        <div className="bg-slate-900 p-4 rounded-lg shadow-md hover:bg-slate-800 hover:cursor-pointer"
            onClick={() =>
                router.push('/tasks/edit/' + task.id)
            }>
            <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
            <p className='mb-2'>{task.description}</p>
            <p className={`font-bold ${getStatusColor(task.status)}`}>Estado : {task.status}</p>
            <p className='mb-2'>Prioridad : {task.priority}</p>
            <p className='text-sm text-gray-400'>{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    );
};





export default TaskCard