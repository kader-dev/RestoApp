import { PartialType } from '@nestjs/mapped-types';
import { ItemDTO } from './item.dto';
export class UpdateItemDto extends PartialType(ItemDTO) { }