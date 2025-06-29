import React from 'react';

const defaultCategories = [
  { icon: '🔧', label: 'Tesisat' },
  { icon: '💡', label: 'Elektrik' },
  { icon: '🧱', label: 'Tadilat' },
  { icon: '🧹', label: 'Temizlik' },
  { icon: '🚚', label: 'Nakliye' },
  { icon: '🛋️', label: 'Mobilya' },
  { icon: '🖌️', label: 'Boya' },
  { icon: '🌳', label: 'Bahçe' }
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
