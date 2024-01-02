import { ButtonStyle, Icon } from "./styles";

export const Button = ({ label, type, onClick, onChange, color, variant }) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick ? onClick : undefined}
      onChange={onChange ? onChange : undefined}
      color={color}
    >
      <Icon variant={variant} />
      {label}
    </ButtonStyle>
  );
};
