import style from "./PostDetail.module.css";

import { Link } from "react-router-dom";
import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div className={style.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={style.createdby}>{post.createdBy}</p>
      <div className={style.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
