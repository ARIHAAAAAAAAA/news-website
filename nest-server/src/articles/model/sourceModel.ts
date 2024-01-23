import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SourceType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  url: string;

  @Field()
  category: string;

  @Field()
  language: string;

  @Field()
  country: string;
}
