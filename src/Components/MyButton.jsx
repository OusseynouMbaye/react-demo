// import PropTypes from "prop-types";
import "../css/Button.css";

// import style from "../css/Button2.module.css";

function MyButton({ numb, onClick }) {
  return (
    <>
      <button className="my_button" onClick={onClick}>
        count is {numb}
      </button>
      {/* <button className={style.button}>I'm a button</button> */}
    </>
  );
}
// MyButton.propTypes = {
//   numb: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
export default MyButton;
