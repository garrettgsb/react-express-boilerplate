import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
  interface Params {
    categoryId: string;
  };
  const params: Params = useParams();

  useEffect(() => {
    axios.get(`/api/categories/${params.categoryId}`)
      .then(res => console.log(res.data)); // Do stuff with it
  }, [params.categoryId]);

  return (
    <div>
      <h2>category #{params.categoryId}</h2>
    </div>
  );
};

export default Category;