// pages/Search.js
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import styles from '../components/ExpertEdge/SerachBar/SearchBar.module.css';
import courseData from '../../public/Data/search.json';
import { useRouter } from 'next/router';
import { FaStar } from "react-icons/fa";


const Search = () => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleSearch = () => {
    setShowDropdown(false);
    // Your search logic here
  };

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  const handleClick = (url) => {
    setShowDropdown(false);
    router.push(url);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
    // Your search logic here
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.input} ref={dropdownRef}>
        <BiSearch className={styles.searchIcon} />
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Search free courses and topics you want to learn"
          value={query}
          onChange={handleChange}
          onClick={handleInputClick}
        />
      </div>

      {showDropdown && (
        <div className={styles.dropdown}>
         <span className={styles.popular}>Popular Courses</span>
          {courseData.map((course) => (
            <div
              className={styles.dropdownItem}
              key={course.id}
              onClick={() => handleClick(course.url)}
            >
              <div className={styles.courseInfo}>
                <h4>{course.title}</h4>
                <div className={styles.dropdowncol}>
                <ul className={styles.ul}>
                   
               <li className={styles.duration}>Duration: {course.Duration}</li>
               <li className={styles.rating}> {course.rating} <FaStar className={styles.iconstar}/></li>
                 
                  </ul>
                </div>
            
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
