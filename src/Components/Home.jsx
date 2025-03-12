import {useState, useContext} from "react";
import { DataContext } from "../App";
import Post from "./Post";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import postData from "../Model/posts.json"


  export default function Home() {
    return (
      <div className="postDiv">
        <h1 className="text-2xl text-yellow-200 font-bold mb-6">Welcome to The Bearcat Board</h1>
        {/* Scrollable Feed Container */}
      <div className="w-full max-w-2xl overflow-y-auto space-y-6">
        {postData.map((post, index) => (
          <Post key={index} user={post.user} time={post.time} postImg={post.postImg} content={post.content} />
        ))}
      </div>
    <button className="addButton">
        <FontAwesomeIcon icon={faPlus} className="text-gray-100 text-5xl"/>
        <p className="text-xs">Add Post!</p>
      </button>
    </div>
   
  );
}