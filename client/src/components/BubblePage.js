import React, { useState, useEffect, Fragment as Frag } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then(res => {
        setColorList(res.data);
        console.log("This is axiosWithAuth.get res in BubblePage.js: ", res);
      })
      .catch(err =>
        console.log("This is axiosWithAuth.get err in BubblePage.js: ", err)
      );
  }, []);

  console.log("This is colorList in BubblePage.js: ", colorList)

  return (
    <Frag>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </Frag>
  );
};

export default BubblePage;
