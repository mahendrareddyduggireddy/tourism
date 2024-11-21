import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: lightskyblue;
`
export const Heading = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
  text-decoration: underline;
  text-decoration-color: blue;
`
export const Para = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  text-align: center;
`

export const Image = styled.img`
  height: 200px;
  width: 96%;
`

export const UnList = styled.ul`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  flex-wrap: wrap;
  width: 50vw;
  list-style-type: none;
  justify-content: space-evenly;
  align-items: center;
`
export const List = styled.li`
  display: flex;
  padding: 8px;
  height: 300px;
  width: 300px;
  background-color: white;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-radius: 7px;
  border-color: white;
  margin: 10px;
`
