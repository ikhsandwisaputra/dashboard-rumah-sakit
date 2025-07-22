import { Link } from "react-router-dom";
import "~/css/button.css";  // Pastikan file CSS di-import

type ButtonProps = {
  label: string;
  url: string;
};

export const Button = ({ label, url }: ButtonProps) => {
  return (
    <Link to={url} className="animated-button">
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v8H4v4h8v8h4v-8h8v-4h-8V2h-4z"></path>
      </svg>

      <span className="text">{label}</span>

      <span className="circle"></span>

      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 2v8H4v4h8v8h4v-8h8v-4h-8V2h-4z"></path>
      </svg>
    </Link>
  );
};
