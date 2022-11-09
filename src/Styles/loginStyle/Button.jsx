import styled from "styled-components";

function Button({ content, onClick }) {
  return (
    <StyledButton onClick={onClick}>{ content }</StyledButton>
  )
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #efa254 0%, #fc7e00 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export default Button