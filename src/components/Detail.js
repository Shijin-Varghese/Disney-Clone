import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc, collection } from "firebase/firestore";
// import Header from "./Header";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  // const findOne1 = async (id) => {
  //   try {
  //     const d = await getDoc(doc(db, "movies", id));
  //     console.log("hello", typeof d.data());
  //     return d.data();
  //   } catch {
  //     return 10;
  //   }
  // };
  useEffect(() => {
    const findOne = async (id) => {
      const d = await getDoc(doc(db, "movies", id));
      setMovie(d.data());
      return d.data();
    };
    let data = findOne(id);
    console.log("dd", movie.title, "      sss");
  }, []);
  return (
    <Container>
      {/* <Header /> */}
      {movie && (
        <>
          {/* <Background>
            <img src={movie.backgroundImage} alt="img" />
          </Background> */}
          <Imgtitle>
            <img src={movie.titleImg} alt="img" />
          </Imgtitle>
          <Controls>
            <Playbutton>
              <img src="/images/play-icon-black.png" alt="img"></img>
              <span>Play</span>
            </Playbutton>
            <Trailerbutton>
              <img src="/images/play-icon-white.png" alt="img"></img>
              <span>Trailer</span>
            </Trailerbutton>
            <Addbutton>
              <span>+</span>
            </Addbutton>
            <Groupwatchbutton>
              <img src="/images/group-icon.png" alt="img"></img>
            </Groupwatchbutton>
          </Controls>
          <Subtitle>{movie.subTitle}</Subtitle>
          <Description>
            <p>{movie.description}</p>
          </Description>
        </>
      )}
    </Container>
  );
}

export default Detail;
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  opacity: 0.4;
  img {
    width: 100%;
    height: 100%;
    object-fit: auto;
  }
`;
const Imgtitle = styled.div`
  width: 3vw; // height: 5vh;
  opacity: 0.7;
  position: relative;
  min-height: 170px;
  margin-top: 20px;
  min-width: 200px;
  //   justify-content: center;

  top: 1px;
  left: -60px;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Controls = styled.div`
  top: 0px;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;
const Playbutton = styled.button`
  margin-right: 22px;
  border-radius: 4px;
  padding: 0 24px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const Trailerbutton = styled(Playbutton)`
  border: 1px solid rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const Addbutton = styled.button`
  height: 44px; // width: 44px;
  margin-right: 12px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: white;
  background-color: rgba(0, 0, 0, 0.6);
  span {
    font-size: 30px;
    color: white;
  }
`;
const Groupwatchbutton = styled(Addbutton)`
  background-color: rgb(0, 0, 0);
`;
const Subtitle = styled.div`
  top: 270px; // position: absolute;
  left: 0;
  background: rgba(249, 249, 249, 0);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  position: absolute;
  top: 289px;
  left: 0;
  line-height: 1.4;
  font-size: 15px;
  margin-top: 16px;
  max-width: 600px;
  color: rgb(249, 249, 249);
`;
