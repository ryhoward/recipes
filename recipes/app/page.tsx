import React from 'react';
import './page.css';
import './types.tsx';

const HeaderUser: React.FC = () => (
  <div>
    <img src="https://via.placeholder.com/150" alt="Recipe" />
  </div>
);

const HeaderMenu: React.FC = () => (
  <header>
    <h1>My Recipes</h1>
    <h1>Browse Recipes</h1>
    <h1>Blog</h1>
    <h1>News</h1>
  </header>
);

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
      Short recipe desc.
    </p>
  </div>
);

const FeaturedRecipe: React.FC = () => (
  <div className="featured-recipe">
    <h2>Featured Recipe of the Week</h2>
    <div className="comments">
      <p>
        <strong>Howard</strong> I made this recipe for the first time, and
        my fam hated it!
      </p>
      <p>
        <strong>Howard TopChefReviewer:</strong> A must-try for anyone who does not like their family
      </p>
    </div>
  </div>
);

const RecipeSection: React.FC = () => (
  <div className="recipe-section">
    <h2>Section Header</h2>
    <div className="recipes">
      {Array(6)//Will hold this until we have an array response I think
        .fill(null)
        .map((_, index) => (
          <RecipeCard key={index} />
        ))}
    </div>
  </div>
);

const Footer: React.FC = () => (
  <footer>
    <p>Howard footer 1 | Howard Footer 2</p>
  </footer>
);

// Main Page Component
const MainPage: React.FC = () => (
  <div className="main-page">
    <HeaderUser />
    <HeaderMenu />
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
