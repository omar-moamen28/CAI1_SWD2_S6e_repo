import './Button.css';

const Button = ({
   children,
   classN = "",
   type = "button",
   variant = "purple",
   border = "none",
   py = "6px",
   px = "12px",
   onClick}) =>
{
   const btnStyles = {
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
         className={`Button ${classN}`}
         type={type}
         style={btnStyles}
         onClick={onClick}
      >
         {children}
      </button>
   )
}

export default Button
