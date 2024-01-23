import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository, 
        },
        JwtService,
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('findAllUser', () => {
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

      expect(await service.findAllUser()).toBe(result);
    });
  });

  
  describe('findOne', () => {
    it('should return a user', async () => {
      const id = 23;
      const result: User = {
        id:23,
        name: "levii",
        email:"avallygrrmc.on",
        password: "string",
        location:"usa",
        language:"en",
        Favorite_news:"business",
        admin:false
      };
      
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await service.findOne(id)).toBe(result);
    });
  });


  describe('createUser', () => {
    it('should create a new user', async () => {
      // Mock data for the createUserDto
      const createUserDto: CreateUserDto = {
        name: "levii",
        email: "avallygrrmc.on",
        password: "string",
        location: "usa",
        language: "en",
        Favorite_news: "business",  
        admin: false,
      };

      // Mock data for the result returned from the database
      const expectedResult: User = {
        id: 1,  
        ...createUserDto,
      };

      // Spy on userRepository.create and userRepository.save methods
      jest.spyOn(userRepository, 'create').mockReturnValue(expectedResult);
      jest.spyOn(userRepository, 'save').mockResolvedValue(expectedResult);

      // Call the createUser function
      const result = await service.createUser(createUserDto);

      // Assertions
      expect(result).toEqual(expectedResult);
      expect(userRepository.create).toHaveBeenCalledWith(createUserDto);
      expect(userRepository.save).toHaveBeenCalledWith(expectedResult);
    });

    it('should reject and return error if user creation fails', async () => {
      // Mock data for the createUserDto
      const createUserDto: CreateUserDto = {
    
        name: "levii",
        email: "avallygrrmc.on",
        password: "string",
        location: "usa",
        language: "en",
        Favorite_news: "business", 
        admin: false,
      };

      // Mocking an error during the save operation
      const saveError = new Error('Failed to save user');
      jest.spyOn(userRepository, 'create').mockReturnValue(createUserDto);
      jest.spyOn(userRepository, 'save').mockRejectedValue(saveError);

      // Assertions
      await expect(service.createUser(createUserDto)).rejects.toThrowError(saveError);
      expect(userRepository.create).toHaveBeenCalledWith(createUserDto);
      expect(userRepository.save).toHaveBeenCalledWith(createUserDto);
    });
  });
});
