// pages/search-results.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/searchresult.module.css';
import courseData from '../../public/Data/search.json';
import Navbar from '@/components/ExpertEdge/ExNavbar/Navbar/Navbar';

const SearchResults = () => {
  const router = useRouter();
  const { q } = router.query;
  const decodedQuery = decodeURIComponent(q || '');

  const filteredCourses = courseData.filter((course) =>
    course.title.toLowerCase().includes(decodedQuery.toLowerCase())
  );

  return (
    <div className={styles.resultsContainer}>
      <Navbar/>
      <h1>Search Results for: {decodedQuery}</h1>
      <div className={styles.searchResults}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className={styles.courseCard} key={course.id}>
              <Link href={`/courses/[id]`} as={`/courses/${course.id}`}>
                {/* Use the anchor tag inside the Link component */}
                <Link href="https://www.learnbay.co/datascience/advance-data-science-certification-courses">
                  <h2 className={styles.courseTitle}>{course.title} </h2>
                  <p>{course.description}</p>
                  <p>{course.Duration}</p>
                  <img
                    className={styles.courseImage}
                    src={course.image}
                    alt={course.title}
                  />
                  </Link>
              
              </Link>
            </div>
          ))
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
