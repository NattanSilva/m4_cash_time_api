import { Router } from "express";
import { createProjectsController, getOneProjectController, listProjectsController } from "../../controllers/projects/projects.controller";

export const projectsRouter = Router()

projectsRouter.post("/",createProjectsController)
projectsRouter.get("/",listProjectsController)
projectsRouter.get("/:id",getOneProjectController)