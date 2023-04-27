import { ButtonStyled } from "./Button.styled";

const Button = ({ label, onClick }) => {
    return <ButtonStyled type="button" onClick={onClick}>{label}</ButtonStyled>;
}

export default Button;