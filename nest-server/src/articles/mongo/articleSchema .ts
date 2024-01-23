import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type ArticleDocument = ArticleSchema & Document;

@Schema()
export class Source extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;
}
@Schema()
export class ArticleSchema {
  @Prop({ type: Source })
  source: Source;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  urlToImage: string;

  @Prop({ required: true })
  publishedAt: string;

  @Prop({ required: true })
  content: string;
}

export const ArticleMongo = SchemaFactory.createForClass(ArticleSchema);
