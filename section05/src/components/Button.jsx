const Button = ({children, text, color = "black"}) => {
    const onClickButton = (e) => {
        console.log(e);
    }
    return (
    <button 
    onClick={onClickButton} // onClickButton()으로 전달하면 안된다.
    // onMouseEnter={onClickButton}
    style={{color:color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
        );
};

export default Button;