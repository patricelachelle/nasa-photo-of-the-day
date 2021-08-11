import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Card, CardTitle, CardText } from 'reactstrap';


const Title = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  
`;

const Text = styled.span`
  font-size: 1.5em;
  text-align: center;
  color: black;
  height: 10%
  
`;

const Wrapper = styled.div`
  padding: .5em;
  background: papayawhip;
  background-color: rebeccapurple
`;

const NasaImage = styled.img`
  width: 80%;
  border-radius: 3px;
  height: .5%;
  object-fit: scale;
  flex-shrink: 0;
  
`;

function Cards () {
    const [media, setMedia] = useState([])
    const [title, setTitle] = useState([])
    const [explanation, setExplanation] = useState([])
    const [date, setDate] = useState([])
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=RvY2bktw5iGGAhjNF2cSO1yUJaASJtwsxM8ZYeOw')
        .then(response => {
            console.log(response.data)
            setMedia(response.data)
            setTitle(response.data)
            setExplanation(response.data)
            setDate(response.data.date)   
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    
    return (
        <div>       
        <Card>
            <Wrapper>
            <NasaImage src={media.hdurl} alt="Beautiful" />
            <Title>
            <CardTitle tag="header">{title.title}</CardTitle>
            </Title>
            <Text>
            <CardText tag="span">{explanation.explanation}</CardText>
            <CardText>
            <small className="text-muted">{date}</small>
            </CardText>
            </Text>
            </Wrapper>
        </Card>       
        </div>       
    )       
}

export default Cards;