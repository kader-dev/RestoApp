import { PartialType } from '@nestjs/mapped-types';
import { CategoryDTO } from './category.dto';
export class UpdateCategoryDto extends PartialType(CategoryDTO) { }