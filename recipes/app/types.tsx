"use client"; 
import { useState } from 'react';
import { useEffect } from 'react';

export interface Recipe {
    id: string;
    title: string;
    servingSize: number;
    cookTime: string;
    description: string;
    imageUrl: string;
    author: string;
  }

const RecipeList: React.FC = () => {
  // State to hold the list of recipes
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // Fetch recipes from an API
  useEffect(() => {
    fetch('https://api.example.com/recipes') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data); // Assuming the API returns an array of Recipe objects
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>Cook Time: {recipe.cookTime}</p>
            <p>Serving Size: {recipe.servingSize}</p>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;

export interface RecipeCard {
  recipe: Recipe;
}

export interface RecipeCategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface RecipeAuthor {
  user: User
  isPrimary: boolean;
}

export interface User {
  id: string;
  imageUrl: string;
}

//export interface NavItem {
//}

export interface Category {
  cuisine: string;
  meal: string;
  season: string;
}

export interface Review {
  rating: number
  body: string
  user: User
}

