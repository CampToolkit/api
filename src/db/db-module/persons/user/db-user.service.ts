import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`User with id: ${id} not found`);
    }
    return user;
  }

  async findOneByVkId(user_vkid: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ user_vkid });
    if (!user) {
      throw new Error(`User with user_vkid: ${user_vkid} not found`);
    }
    return user;
  }

  createUser(userParams: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(userParams);
    return this.userRepository.save(newUser);
  }

  async updateToken(params: {
    user_vkid: number;
    access_token: string;
    refresh_token: string;
    device_id: string;
    expires_date: Date;
  }): Promise<User> {
    const { user_vkid, access_token, refresh_token, device_id, expires_date } =
      params;
    const user = await this.userRepository.findOneBy({ user_vkid });

    if (!user) {
      throw new Error(`User with id = ${user_vkid} not found`);
    }

    user.access_token = access_token;
    user.refresh_token = refresh_token;
    user.device_id = device_id;
    user.expires_date = expires_date;

    return this.userRepository.save(user);
  }
}
