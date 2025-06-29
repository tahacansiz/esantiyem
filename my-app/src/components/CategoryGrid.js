import React from 'react';

const defaultCategories = [
  { icon: '🎨', label: 'Design' },
  { icon: '💻', label: 'Development' },
  { icon: '✍️', label: 'Writing' },
  { icon: '📈', label: 'Marketing' },
  { icon: '🎬', label: 'Video' },
  { icon: '🎵', label: 'Music' },
  { icon: '🔧', label: 'Repairs' },
  { icon: '🧹', label: 'Cleaning' }
];

function CategoryGrid({ categories = defaultCategories }) {
  return (
    <section className="categories" id="categories">
      {categories.map((cat, idx) => (
        <div className="category-card" key={idx}>
          <div>{cat.icon}</div>
          <div>{cat.label}</div>
        </div>
      ))}
    </section>
  );
}

export default CategoryGrid;
