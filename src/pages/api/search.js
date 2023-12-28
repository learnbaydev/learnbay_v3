// pages/api/search.js
import courseData from '../../../public/Data/search.json';

export default (req, res) => {
  try {
    const { q } = req.query;

    // If there is no search query, return all courses
    if (!q) {
      res.status(200).json({ results: courseData });
      return;
    }

    // Simulate a search by filtering course data based on the query
    const results = courseData.filter((course) =>
      course.title.toLowerCase().includes(q.toLowerCase())
    );

    res.status(200).json({ results });
  } catch (error) {
    console.error('Error in API search:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
