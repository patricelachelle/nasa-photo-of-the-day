import React, { useState } from "react";
import "./App.css";
import Cards from './Cards'
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: .5em;
  background: papayawhip;
  background-color: rebeccapurple
`;

function App() {
  const [photos] = useState([])
  const [date] = useState([])
  
  return (
      <div className="App">
      <Wrapper>
      <Title>NASA Photo of the Day</Title>
      </Wrapper>
      {<Cards key date = {date} photo = {photos}/>}      
    </div>
  );
}

export default App;
