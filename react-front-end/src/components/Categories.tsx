import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';

const Categories = () => {
  const { userRef } = useContext(UserContext);
  const user = userRef.current
  console.log('from categories', user);
  return (
    <div>
      <h2>Categories</h2>

      <div>
        <Link to="/category/1">Category Name #1</Link><br/>
        <Link to="/category/2">Category Name #2</Link><br/>
        <Link to="/category/3">Category Name #3</Link><br/>
        <Link to="/category/4">Category Name #4</Link><br/>
        <Link to="/category/5">Category Name #5</Link>
      </div>
    </div>
  );
};

export default Categories;
