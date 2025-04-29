import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="post-body">Text</label>
        <textarea
          id="post-body"
          required
          rows={3}
          onChange={props.onBodyChange}
        />
      </p>
      <p>
        <label htmlFor="user-name">Your Name</label>
        <input
          type="text"
          id="user-name"
          required
          onChange={props.onAuthorChange}
        />
      </p>
    </form>
  );
}

export default NewPost;
