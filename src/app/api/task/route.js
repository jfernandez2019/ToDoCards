import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET(){

    const task = await prisma.task.findMany()
    return NextResponse.json(task);
}

export async function POST(request){
    const {title,description,priority,status} = await request.json()
    const newTask = await prisma.task.create({
        data: {
            /*
            como son lo mismo entonces abajo solo colocare una vez la informacion
            title:title,
            description:description*/
            title,
            description,
            priority,
            status,
        }
    })
    return NextResponse.json(newTask);
}