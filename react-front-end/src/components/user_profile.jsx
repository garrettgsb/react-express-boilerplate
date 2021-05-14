import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import MenuAppBar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faHeart,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";


const UserProfile = (props) => {
  const context = useContext(UserContext);
  console.log("PROFILE CONTEXT", context)
  return (
    <>
      <MenuAppBar />
      <article className="UserProfile">
        <NameAndPhoto
          name={"Example Panda"}
          imgSrc={require("../images/newPanda.png")}
          onEdit={() => {
            alert("Edit");
          }}
        />
        <hr />
        <MyResources
          title={"Example Title"}
          category={"Example Category"}
          description={"Example Description"}
          link={"www.google.com"}
          onFavorite={() => {
            alert("Favorite");
          }}
        />
        <hr />
        <div className="UserNote">
          <NewNote />
          <hr />
          <PostedNote
            note={"Here is a note on how I am feeling today."}
            onEdit={() => {
              alert("Edit");
            }}
            onDelete={() => {
              alert("Delete");
            }}
          />
        </div>
      </article>
    </>
  );
};

const NameAndPhoto = (props) => {
  return (
    <div className="NameAndPhoto">
      <img
        className="Avatar"
        src={props.imgSrc}
        alt={props.name}
        width="200"
        height="150"
      />
      <div className="NameAndEdit">
        <h2 className="UserName">{props.name} </h2>
        <FontAwesomeIcon
          onClick={props.onEdit}
          className="EditIcon"
          icon={faEdit}
        />
      </div>
    </div>
  );
};

const MyResources = (props) => {

  const [favourited, setFavourited] = useState(null);

  const fetchFavourited = async () => {
    const userID = await axios.get(`http://localhost:8080/api/users/loggedin`);
    //might need to get user.id from there (accessing user id key)
    if (userID) {
      const response = await axios.get(`http://localhost:8080/api/favourites/favourited/${userID}`);
      console.log("MYRE", response)
      setFavourited(response.data)
    }
  }
  console.log("favourited state", favourited)
  
  useEffect(() => {
    fetchFavourited();
  }, [])

  return (
    <div className="Resource">
      <h3>My Resources</h3>
      <div>{/* Render Resource Box From Resource Page */}</div>
      {favourited && favourited.map((favourite) => {
        return (
        <section className="ResourceBox" key={favourite.id}>
          <h4>{favourite.title}</h4>
          <h6>{favourite.category}</h6>
          <h5>{favourite.description}</h5>
          <a href={favourite.link} target="_blank" rel="noopener noreferrer">
            Find Out More
          </a>
          <FontAwesomeIcon onClick={props.onFavorite} className="Heart" icon={faHeart} />
        </section>
        )
      })}
    </div>
  );
};

const NewNote = (props) => {

  const [postReg, setPostReg] = useState('');

  const wall = () => {
    // console.log('wall test', postReg)
    axios.post('http://localhost:8080/api/posts/profile/create', {
      body: postReg
    }).then(() => {
      window.location.reload();
    })
  }

  return (
    <div>
      <h3>My Wall</h3>
        <label htmlFor="inp" className="inp">
          <input type="text" placeholder="&nbsp;" onChange={(e)=>
          {setPostReg(e.target.value)}}></input>
          <span className="label">
            Write A New Note{" "}
            <FontAwesomeIcon className="PencilIcon" icon={faPencilAlt} />
          </span>
          <span className="focus-bg"></span>
        </label>
        <button onClick={wall} className="SubmitNote" type="submit">
          Submit
        </button>
    </div>
  );
};

const PostedNote = (props) => {
  const [notes, setNotes] = useState(null);
  // console.log("NOTES11", notes)
  const fetchNotes = async () => {
    const response = await axios.get(`http://localhost:8080/api/posts/notes`);
    // console.log("NOTES", response)
    setNotes(response.data)
    // console.log("NOTES DATA", response.data)
  }

  const deleteNote = (id) => {
    axios.delete(`http://localhost:8080/api/posts/notes/delete/${id}`)
    .then(() => {
      window.location.reload();
    })
  }

  useEffect(() => {
    fetchNotes();
  }, [])


  return (
    <div className="PostedNote">
      <h3>My Notes</h3>
      {notes && notes.map((note) => {
        return (
        <section className="Notes" key={note.id}>
          <p>{note.body}</p>
          <p>{note.time_stamp}</p>
          <div className="EditTrashIcon">
            <FontAwesomeIcon
              onClick={props.onEdit}
              className="EditIcon"
              icon={faEdit}
            />
            <FontAwesomeIcon
              onClick={()=>deleteNote(note.id)}
              className="TrashIcon"
              icon={faTrashAlt}
            />
          </div>
        </section>
        )
      })}
    </div>
  );
};

export default UserProfile;
{
}
