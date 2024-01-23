import { Injectable } from '@nestjs/common';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { ArticleType } from './model/articleModel';
import { CountryType } from 'src/types/country';

const apiKey ="f1f2e82f2d5244af82a8e043b80d93ac";

@Injectable()
export class ArticlesService {
  create(createArticleInput: CreateArticleInput) {
    return 'This action adds a new article';
  }

  async Top_headlines_countries(country: CountryType, category: string) {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch articles. Status: ${response.status}`);
      }
      const data: { articles: ArticleType[] } = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  }
  
  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleInput: UpdateArticleInput) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
