import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
    <NewPost />
    <ul className={classes.posts}>
      <Post author="React" body="ReactJS is awesome!" />
      <Post author="NextJS" body="Learn NextJS in Future!" />
    </ul>
    </>
  );
}

export default PostsList;
