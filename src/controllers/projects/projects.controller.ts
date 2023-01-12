import { createProjectsService } from "../../services/projects/create.projects.services"
import { Request,Response } from "express"
import { listProjectsService } from "../../services/projects/list.projects.services"


export const createProjectsController = async (request:Request, response:Response)=>{
    const [status,json] = await createProjectsService(request.body)
    return response.status(status as number).json(json)
}

export const listProjectsController = async (request:Request, response:Response)=>{
    const [status,json] = await listProjectsService()
    return response.status(status as number).json(json)
}