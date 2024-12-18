import React from 'react';
import './page.css';
import './types.tsx';

// Components for different sections of the page
const Header: React.FC = () => (
  <header>
    <h1>I’m a big text header pls read me!</h1>
  </header>
);

const SearchBar: React.FC = () => (
  <div className="search-bar">
    <input type="text" placeholder="Start typing to begin your search" />
  </div>
);

const Categories: React.FC = () => (
  <div className="categories">
    {Array(8)
      .fill(null)
      .map((_, index) => (
        <div key={index} className="category-circle">
          Food Group
        </div>
      ))}
    <div className="view-more">View More</div>
  </div>
);

const RecipeCard: React.FC = () => (
  <div className="recipe-card">
    <img src="https://via.placeholder.com/150" alt="Recipe" />
    <h3>Imma Recipe Title</h3>
    <p>Serving Size: 4 servings</p>
    <p>Cook Time: 45 minutes</p>
    <p>
      A short description of the recipe to entice the reader to check it out.
    </p>
  </div>
);

const FeaturedRecipe: React.FC = () => (
  <div className="featured-recipe">
    <h2>Featured Recipe of the Week</h2>
    <div className="comments">
      <p>
        <strong>Lisa Smith:</strong> I made this recipe for the first time, and
        my family loved it!
      </p>
      <p>
        <strong>Mary TopChefReviewer:</strong> A must-try for anyone who loves
        bold flavors!
      </p>
    </div>
  </div>
);

const RecipeSection: React.FC = () => (
  <div className="recipe-section">
    <h2>Section Header</h2>
    <div className="recipes">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <RecipeCard key={index} />
        ))}
    </div>
  </div>
);

const Footer: React.FC = () => (
  <footer>
    <p>Terms of Service | Privacy Policy</p>
  </footer>
);

// Main Page Component
const MainPage: React.FC = () => (
  <div className="main-page">
    <Header />
    <SearchBar />
    <Categories />
    <RecipeSection />
    <FeaturedRecipe />
    <RecipeSection />
    <Footer />
  </div>
);

export default MainPage;
