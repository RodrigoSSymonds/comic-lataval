import React from "react";
import {useParams} from "react-router-dom";
import EpisodeList from "../components/EpisodeList";

export default function Comic() {


  return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className="text-white">Comic </h2>
      <EpisodeList/>
 
    </main>
  );
}