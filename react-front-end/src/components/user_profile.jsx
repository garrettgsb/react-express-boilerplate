import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faHeart,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const UserProfile = (props) => {
  return (
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
  return (
    <div className="Resource">
      <h3>My Resources</h3>
      <div>{/* Render Resource Box From Resource Page */}</div>
      <section className="ResourceBox">
        <h4>{props.title}</h4>
        <h6>{props.category}</h6>
        <h5>{props.description}</h5>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Find Out More
        </a>
        <FontAwesomeIcon onClick={props.onFavorite} className="Heart" icon={faHeart} />
      </section>
    </div>
  );
};

const NewNote = (props) => {
  return (
    <div>
      <h3>My Wall</h3>
      <form className="NewNote" method="POST" action="/api/users/login">
        <label for="inp" class="inp">
          <input type="text" id="inp" placeholder="&nbsp;"></input>
          <span class="label">
            Write A New Note{" "}
            <FontAwesomeIcon className="PencilIcon" icon={faPencilAlt} />
          </span>
          <span class="focus-bg"></span>
        </label>
        <button className="SubmitNote" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const PostedNote = (props) => {
  return (
    <div className="PostedNote">
      <p>{props.note}</p>
      <div className="EditTrashIcon">
        <FontAwesomeIcon
          onClick={props.onEdit}
          className="EditIcon"
          icon={faEdit}
        />
        <FontAwesomeIcon
          onClick={props.onDelete}
          className="TrashIcon"
          icon={faTrashAlt}
        />
      </div>
    </div>
  );
};

export default UserProfile;
{
}
