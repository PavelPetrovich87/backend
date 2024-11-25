import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type SuggestionDocument = Suggestion & Document;

@Schema({ timestamps: true })
export class Suggestion {
  @Prop({ required: true })
  text: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ required: true })
  category: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const SuggestionSchema = SchemaFactory.createForClass(Suggestion); 