import React from 'react';

const testimonials = [
  { quote: 'Harika bir hizmet, çok memnun kaldım.', name: 'Ayşe K.' },
  { quote: 'Ustalar çok hızlı dönüş yaptılar.', name: 'Mehmet D.' },
  { quote: 'Gönül rahatlığıyla tavsiye ederim.', name: 'Selin P.' }
];

function TestimonialsSection() {
  return (
    <section className="testimonials">
      <h2>Kullanıcı Yorumları</h2>
      <div className="testimonial-list">
        {testimonials.map((t, idx) => (
          <div className="testimonial" key={idx}>
            <p className="quote">{t.quote}</p>
            <p className="name">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
