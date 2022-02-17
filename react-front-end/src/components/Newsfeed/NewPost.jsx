import React from "react";
import { Segment } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function NewPost() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <Segment raised>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input {...register("title")} placeholder='Please enter a title for your post' />
        <label>Description</label>
        <input {...register("description")} placeholder='Tell us more...' />
        <label>Topic of your post is:</label>
        <select {...register("topic")}>
          <option value="general">female</option>
          <option value="question">male</option>
          <option value="plant hack">other</option>
        </select>

        <input type="submit" />
        <div class="ui buttons">
        <button class="ui button">Cancel</button>
        <div class="or"></div>
        <button class="ui positive button" onClick={onSubmit} >Save</button>
      </div>
      </form>
    </Segment>
  );
};
