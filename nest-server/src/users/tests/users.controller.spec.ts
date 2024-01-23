import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt'; 

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository, 
        },
        JwtService, 
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {

      const result: User[] = [{
        id:23,
        name: "levii",
        email:"avallygrrmc.on",
        password: "string",
        location:"usa",
        language:"en",
        Favorite_news:"business",
        admin:false
      },
      {
        id: 21,
        name: "sheli",
        email: "ava@grrm.con",
        password: "string",
        language: "en",
        Favorite_news: "business",
        location: "usa",
        admin: false
      }];
      
      jest.spyOn(service, 'findAllUser').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return an array of users', async () => {
      const id = 21;
      const result: User = 
      {
        id: 21,
        name: "sheli",
        email: "ava@grrm.con",
        password: "string",
        language: "en",
        Favorite_news: "business",
        location: "usa",
        admin: false
      };
      
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne(id)).toBe(result);
    });
  });
});
