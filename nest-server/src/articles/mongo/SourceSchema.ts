import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class SourceSchema {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  country: string;
}

export const SourceMongo = SchemaFactory.createForClass(SourceSchema);
