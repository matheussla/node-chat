import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"

class SettingsController {
  async create(req: Request, res: Response) {
    const { body } = req;
    const { chat, username} = body;
  
    const settingsRepository = getCustomRepository(SettingsRepository);
  
    const settings = settingsRepository.create({
      chat,
      username,
    })
  
    await settingsRepository.save(settings);
  
    return res.json(settings).status(201);
  }
}

export { SettingsController }