import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  align-item: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
`

export const Button = styled.button`
  color: white;
  background-color: #00C3AB;
  padding: 12px;
  cursor: pointer;
  border: none;
  margin: 10px 0;
`