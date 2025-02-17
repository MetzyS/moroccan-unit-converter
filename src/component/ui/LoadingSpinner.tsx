import { ImSpinner2 } from "react-icons/im";

const LoadingSpinner = (props: { lang: string }) => {
  let text: string;
  switch (props.lang) {
    case "en":
      text = "Loading";
      break;
    default:
      text = "Chargement";
      break;
  }
  return (
    <div className="flex flex-col gap-2 items-center justify-center animate-pulse">
      <span>{text}</span>
      <ImSpinner2 className="size-8 fill-blue-500/70 animate-spin origin-center" />
    </div>
  );
};

export default LoadingSpinner;
