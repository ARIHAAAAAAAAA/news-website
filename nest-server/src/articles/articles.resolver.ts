import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { ArticleType } from './model/articleModel';
import { SourceType } from './model/sourceModel';
import {  CountryType } from 'src/types/country';

@Resolver(() => ArticleType)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  // @Mutation(() => ArticleType)
  // createArticle(@Args('createArticleInput') createArticleInput: CreateArticleInput) {
  //   return this.articlesService.create(createArticleInput);
  // }

  @Query(() => [ArticleType], { name: 'articles' })
  async Top_headlines(
    @Args('country', { type: () => String }) country: CountryType,
    @Args('category', { type: () => String }) category: string,
  ) {
    const data = await this.articlesService.Top_headlines_countries(country, category);
    return data.articles; 
  }
  


  @Query(() => ArticleType, { name: 'article' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.articlesService.findOne(id);
  }


  @Mutation(() => ArticleType)
  removeArticle(@Args('id', { type: () => Int }) id: number) {
    return this.articlesService.remove(id);
  }
}


// @Resolver(() => SourceType)
// export class SourceResolver {
//   constructor(private readonly articlesService: ArticlesService) {}

//   // @Mutation(() => SourceType)
//   // createSource(@Args('createSourceInput') createSourceInput: CreateSourceInput) {
//   //   return this.articlesService.createSource(createSourceInput);
//   // }

//   @Query(() => [SourceType], { name: 'sources' })
//   findAllSources() {
//     return this.articlesService.findAllSources();
//   }

//   @Query(() => SourceType, { name: 'source' })
//   findOneSource(@Args('id', { type: () => Int }) id: number) {
//     return this.articlesService.findOneSource(id);
//   }

//   @Mutation(() => SourceType)
//   updateSource(@Args('updateSourceInput') updateSourceInput: UpdateSourceInput) {
//     return this.articlesService.updateSource(updateSourceInput.id, updateSourceInput);
//   }

//   @Mutation(() => SourceType)
//   removeSource(@Args('id', { type: () => Int }) id: number) {
//     return this.articlesService.removeSource(id);
//   }
// }
