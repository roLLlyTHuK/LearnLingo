import { useState, useEffect } from 'react';

const Filters = ({ teachers, onFilterChange }) => {
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  useEffect(() => {
    const uniqueLanguages = new Set();
    const uniqueLevels = new Set();
    const uniquePrices = new Set();

    teachers.forEach((teacher) => {
      teacher.languages.forEach((lang) => uniqueLanguages.add(lang));
      teacher.levels.forEach((level) => uniqueLevels.add(level));
      uniquePrices.add(teacher.price_per_hour);
    });

    setLanguages(Array.from(uniqueLanguages));
    setLevels(Array.from(uniqueLevels));
    setPrices(Array.from(uniquePrices).sort((a, b) => a - b));
  }, [teachers]);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    onFilterChange({
      language: e.target.value,
      level: selectedLevel,
      price: selectedPrice,
    });
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
    onFilterChange({
      language: selectedLanguage,
      level: e.target.value,
      price: selectedPrice,
    });
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    onFilterChange({
      language: selectedLanguage,
      level: selectedLevel,
      price: e.target.value,
    });
  };

  return (
    <div>
      <select onChange={handleLanguageChange} value={selectedLanguage}>
        <option value="">Select Language</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>

      <select onChange={handleLevelChange} value={selectedLevel}>
        <option value="">Select Level</option>
        {levels.map((level, index) => (
          <option key={index} value={level}>
            {level}
          </option>
        ))}
      </select>

      <select onChange={handlePriceChange} value={selectedPrice}>
        <option value="">Select Price</option>
        {prices.map((price, index) => (
          <option key={index} value={price}>
            {price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
