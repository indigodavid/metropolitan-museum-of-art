const getDepartments = async () => {
  const departments = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
  const departmentsObject = await departments.json();
  return departmentsObject.departments;
};

export default getDepartments;