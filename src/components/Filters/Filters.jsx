import { useState, useEffect } from 'react';
import { FilterItem, FiltersContainer } from './Filters.styled';

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
    <FiltersContainer>
      <FilterItem>
        <label>Languages</label>
        <select onChange={handleLanguageChange} value={selectedLanguage}>
          <option value="">All</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </FilterItem>
      <FilterItem>
        <label>Level of knowledge</label>
        <select onChange={handleLevelChange} value={selectedLevel}>
          <option value="">All</option>
          {levels.map((level, index) => (
            <option key={index} value={level}>
              {level}
            </option>
          ))}
        </select>
      </FilterItem>
      <FilterItem>
        <label>Price</label>
        <select onChange={handlePriceChange} value={selectedPrice}>
          <option value="">All</option>
          {prices.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </select>
      </FilterItem>
    </FiltersContainer>
  );
};

export default Filters;
