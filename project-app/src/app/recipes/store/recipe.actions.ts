import {Recipe} from "../recipe-list/recipe.model";
import {Action} from "@ngrx/store";

export type RecipeActions = SetRecipes | AddRecipe | UpdateRecipe | DeleteRecipe | FetchRecipes | StoreRecipes;

export const SET_RECIPES = '[Recipes] Set Recipes';
export const ADD_RECIPE = '[Recipes] Add Recipe';
export const UPDATE_RECIPE = '[Recipes] Update Recipe';
export const DELETE_RECIPE = '[Recipes] Delete Recipe';
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
export const STORE_RECIPES = '[Recipes] Store Recipes'

export class SetRecipes implements Action{
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]) {
  }
}

export class AddRecipe implements Action{
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {
  }
}

export class UpdateRecipe implements Action{
  readonly type = UPDATE_RECIPE;
  constructor(public payload: {recipe: Recipe, id: number}) {
  }
}

export class DeleteRecipe implements Action{
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {
  }
}

export class FetchRecipes implements Action{
  readonly type = FETCH_RECIPES;
}

export class StoreRecipes implements Action{
  readonly type = STORE_RECIPES;
}
