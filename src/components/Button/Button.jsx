import './Button.css';

const Button = ({children, fs, variant = "purple", color = "#FFF", border = "none", py = "6px", px = "12px", onClick}) =>
{
   const btnStyles = {
      color: color,
      fontSize: fs,
      backgroundColor: variant,
      paddingTop: py,
      paddingBottom: py,
      paddingRight: px,
      paddingLeft: px,
      border: border,
      borderRadius: "4px"
   }

   return (
      <button
         className="Button"
         type={"button"}
         style={btnStyles}
         onClick={onClick}
      >
         {children}
      </button>
   )
}

export default Button
