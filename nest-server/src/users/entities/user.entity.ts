import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['he', 'en', 'ru'] })
  //   {
  // he - Hebrew
  // en - English
  // ru -Russian
  // }
  language: string;
  
  @Column({ type: 'enum', enum: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'] })

  Favorite_news: string;

  @Column({ type: 'varchar' })
  location: string;

  @Column({ type: 'varchar' })
  admin: boolean;

}
