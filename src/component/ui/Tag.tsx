import { GoTriangleDown } from "react-icons/go";

const Tag = (props: {
  name: string;
  color: string;
  tooltipText?: string;
  text?: string;
  className?: string;
}) => {
  return (
    <li
      className={`border border-black/30 text-center shadow p-1 rounded-md cursor-pointer ${props.color} has-tooltip ${props.className} list-none`}
    >
      {props.tooltipText && (
        <>
          <p className="tooltip p-1.5 first-letter:capitalize flex flex-col text-left">
            {props.tooltipText}
          </p>
          <GoTriangleDown className="tooltip-arrow" />
        </>
      )}
      <span
        className={`text-white capitalize ${
          props.text ? props.text : "text-sm"
        }`}
      >
        {props.name}
      </span>
    </li>
  );
};

export default Tag;
