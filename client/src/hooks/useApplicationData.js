import Axios from "axios";

export default function useApplicationData() {
  const [user, setUser] = useState({
    name: "", email: "", password: ""
  });

  useEffect(() => {
    Promise.all([
      Axios.get("/login")
    ]).then((all) => {
      setUser({...user});
    });
  }, []) 
}