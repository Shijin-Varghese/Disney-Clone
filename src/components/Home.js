import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { onSnapshot, collection, query } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(db, "movies"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tempMovies = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
    // db.collection("movies").onSnapShot((snapshot) => {
    //   console.log(snapshot);
    // });
  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  text-align:left;
  position: relative;
  overflow-x:hidden;
    &:before { 
       content:url("/images/home-background.png") ;  
       background: no-repeat center center/cover ; 
    position:absolute;
      top: 10;
      left; 0;
      right: 0;
      bottom: 0;
     z-index: -1;
    }
`;
