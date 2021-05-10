import { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const Entry = () => {
  interface Params {
    entryId: string;
  };
  const params: Params = useParams();

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    axios.get(`/api/entries/${params.entryId}`)
      .then(res => console.log(res.data)); // Do stuff with it
  }, [params.entryId]);

  return (
    <div>
      <h2>entry #{params.entryId}</h2>
    </div>
  );
};

export default Entry;