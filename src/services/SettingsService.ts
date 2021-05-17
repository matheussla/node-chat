import { getCustomRepository} from 'typeorm'
import { SettingsRepository } from '../repositories/SettingsRepository'

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({chat, username} : ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);
    
    const findUser = await settingsRepository.findOne({username})
    
    if(findUser) {
      throw new Error('User already exists!')
    }
    
    const settings = settingsRepository.create({
      chat,
      username,
    })
  
    await settingsRepository.save(settings);

    return settings;
  }

}

export { SettingsService } 