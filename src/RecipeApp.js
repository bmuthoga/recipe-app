import React from 'react';
import Header from './components/header/Header'
import Recipe from './components/recipe/Recipe'
import './RecipeApp.css';

function RecipeApp() {
  const recipes = [
    {
      img: 'spaghetti_.jpg',
      title: 'Spaghetti',
      ingredients: [ 'pasta', '8 cups water', '1 box spaghetti' ],
      instructions: 'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce'
    },
    {
      img: 'milkshake.jpg',
      title: 'Milkshake',
      ingredients: [ '2 Scoops Ice Cream', '8 ounces milk' ],
      instructions: 'Combine ice cream and milk. Blend until creamy'
    },
    {
      img: 'avocado_toast_.jpg',
      title: 'Avocado Toast',
      ingredients: [ '2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper' ],
      instructions: 'Toast bread. Slice avocado and slice on bread. Add salt, oil, and pepper to taste.'
    }
  ]
  return (
    <div className="App">
      <Header />
      <div className="recipe-container">
        {recipes.map((r, idx) => (
          <Recipe 
            key={(idx * Math.random()) + 1}
            {...r} />
        ))}
      </div>
    </div>
  );
}

export default RecipeApp;
