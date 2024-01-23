import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MiniSourceType {
  @Field(() => ID,{ nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name: string;
}

@ObjectType()
export class ArticleType {
  @Field(() => MiniSourceType)
  source?: MiniSourceType;

  @Field(() => String, { nullable: true })
  author?: string;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  url: string;

  @Field(() => String, { nullable: true })
  urlToImage: string;

  @Field(() => String, { nullable: true })
  publishedAt: string;

  @Field(() => String, { nullable: true })
  content?: string;
}
