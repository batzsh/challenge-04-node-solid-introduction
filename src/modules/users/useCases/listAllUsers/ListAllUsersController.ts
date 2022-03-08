import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    const all = this.listAllUsersUseCase.execute(user_id);

    if (!all) {
      return response
        .status(400)
        .json({ error: "User not found or not an admin" });
    }

    return response.status(200).json(all);
  }
}

export { ListAllUsersController };
