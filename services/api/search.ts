const mealsByName = (name: string): string => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
const mealsByIngredient = (ingredient: string): string => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
const mealsByFirstLetter = (letter: string): string => `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;

const drinksByName = (name: string): string => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
const drinksByIngredient = (ingredient: string): string => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
const drinksByFirstLetter = (letter: string): string => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

export async function getMealsByParams<ResponseType> (searchType: string, searchQuery: string): Promise<ResponseType> {
  let response, data;
  if (searchType === 'ingredient') {
    response = await fetch(mealsByIngredient(searchQuery));
    data = await response.json();
  }
  else if (searchType === 'first letter') {
    response = await fetch(mealsByFirstLetter(searchQuery));
    data = await response.json();
  }
  else if (searchType === 'name') {
    response = await fetch(mealsByName(searchQuery));
    data = await response.json();
  }
  return data;
};

export async function getDrinksByParams<ResponseType> (searchType: string, searchQuery: string): Promise<ResponseType> {
  let response, data;
  if (searchType === 'ingredient') {
    response = await fetch(drinksByIngredient(searchQuery));
    data = await response.json();
  }
  else if (searchType === 'first letter') {
    response = await fetch(drinksByFirstLetter(searchQuery));
    data = await response.json();
  }
  else if (searchType === 'name') {
    response = await fetch(drinksByName(searchQuery));
    data = await response.json();
  }
  return data;
};
