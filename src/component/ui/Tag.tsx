import { GoTriangleDown } from "react-icons/go";

const Tag = (props: { name: string; color: string; tooltipText?: string }) => {
  return (
    <li
      className={`border border-black/30 shadow p-1 rounded-md cursor-pointer ${props.color} has-tooltip`}
    >
      {props.tooltipText && (
        <>
          <p className="tooltip p-1 first-letter:capitalize flex flex-col">
            {props.tooltipText}
          </p>
          <GoTriangleDown className="tooltip-arrow" />
        </>
      )}
      <span className="text-white capitalize">{props.name}</span>
    </li>
  );
};

export default Tag;
