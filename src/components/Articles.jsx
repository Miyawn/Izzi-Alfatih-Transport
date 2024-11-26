import React from 'react';

const Articles = () => (
  <section id="articles" className="container mx-auto py-16">
    <h3 className="text-3xl font-bold text-center mb-10">Featured Articles</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Article 1 */}
      <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
        <img
          src="../src/assets/Honka.png"
          alt="Article 1"
          className="w-full h-55 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold">Article 1</h3>
          <p className="mt-2">Summary of article 1</p>
        </div>
      </div>

      {/* Article 2 */}
      <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
        <img
          src="../src/assets/Honka.png"
          alt="Article 2"
          className="w-full h-55 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold">Article 2</h3>
          <p className="mt-2">Summary of article 2</p>
        </div>
      </div>

      {/* Article 3 */}
      <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
        <img
          src="../src/assets/Honka.png"
          alt="Article 3"
          className="w-full h-55 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold">Article 3</h3>
          <p className="mt-2">Summary of article 3</p>
        </div>
      </div>
    </div>
  </section>
);

export default Articles;
