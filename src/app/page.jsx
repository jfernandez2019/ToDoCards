//Tengo la APi y el front en el mismo proyecto por eso lo leo directo de la base de datos
//no olvidar que para leer una api o consultar directamente a la BD la funcion es asincrona
import { prisma } from "@/libs/prisma";
import TaskCard from '@/Components/TaskCard';


const loadTask = async () => {
  //Voy a ordenar las tareas por fecha de creacion de manera descendente
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export const dynamic = 'force-dynamic';

const HomePage = async ({ }) => {
  const tasks = await loadTask();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {tasks.map(task => (
            <TaskCard task={task} key={task.id} />
          ))
        }
      </div>
    </section>
  );
}

export default HomePage