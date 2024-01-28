function CourseList() {
  const getCourses = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/courses/?offset=0&count=20`);
      const response = await res.json();
      console.log('response', JSON.stringify(response.data));
    } catch (error) {
      console.log('에러', error);
    }
  };
  getCourses()
  return (
    <div>
      <div>전체 121개</div>
    </div>
  );
}

export default CourseList;
