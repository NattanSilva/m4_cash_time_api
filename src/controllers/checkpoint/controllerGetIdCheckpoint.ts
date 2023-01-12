import { Request, Response } from "express";
import { serviceGetIdCheckpoint } from "../../service/checkpoint/serviceGetIdCheckpoint";

const aaa = {
    project_id: "122",
    user_id: "sss",
    checkpoint_id: "asas"
  };

const controllerGetIdCheckpoint = async (req: Request, res: Response) => {

    const data = await serviceGetIdCheckpoint(aaa) 

    return res.status(200).json(data)
};

export { controllerGetIdCheckpoint };
