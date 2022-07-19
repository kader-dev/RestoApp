import { CategoryDTO } from './category.dto';
import { UpdateCategoryDto } from './update-category.dto';
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "../../../shared/types/category";

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private CategoryModel: Model<Category>) { }
    async createCategory(createCategoryDto: CategoryDTO): Promise<Category> {
        const newCategory = await new this.CategoryModel(createCategoryDto);
        return newCategory.save();
    }
    async updateCategory(CategoryId: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        const existingCategory = await this.CategoryModel.findByIdAndUpdate(CategoryId, updateCategoryDto, { new: true });
        if (!existingCategory) {
            throw new NotFoundException(`Category #${CategoryId} not found`);
        }
        return existingCategory;
    }
    async getAllCategorys(): Promise<Category[]> {
        const CategoryData = await this.CategoryModel.find().populate('user');
        if (!CategoryData || CategoryData.length == 0) {
            throw new NotFoundException('Category data not found!');
        }
        return CategoryData;
    }
    async getCategory(CategoryId: string): Promise<Category> {
        const existingCategory = await (await this.CategoryModel.findById(CategoryId).exec());
        if (!existingCategory) {
            throw new NotFoundException(`Category #${CategoryId} not found`);
        }
        return existingCategory;
    }
    async getCategoryByUser(UserId: string): Promise<Category[]> {
        const existingCategory = await (await this.CategoryModel.find({ user: UserId }).exec());
        if (!existingCategory) {
            throw new NotFoundException(`Category #${UserId} not found`);
        }
        return existingCategory;
    }
    async deleteCategory(CategoryId: string): Promise<Category> {
        const deletedCategory = await this.CategoryModel.findByIdAndDelete(CategoryId);
        if (!deletedCategory) {
            throw new NotFoundException(`Category #${CategoryId} not found`);
        }
        return deletedCategory;
    }
}