// pages/courses/[id].js
import { useRouter } from 'next/router';
import courseData from '../../../public/Data/search.json';
import Link from 'next/link';

const CourseDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the course with the matching ID
  const selectedCourse = courseData.find((course) => course.id === parseInt(id, 10));

  if (!selectedCourse) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <h1>{selectedCourse.title}</h1>
      <p>Description: {selectedCourse.description}</p>
      <p>Duration: {selectedCourse.duration}</p>
      {/* Add more details as needed */}

      <Link href="/search">
        <a>Back to Search</a>
      </Link>
    </div>
  );
};

export default CourseDetail;
