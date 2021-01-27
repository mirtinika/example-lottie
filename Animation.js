import Lottie from "react-lottie";

export default function Animation({ data, width, height, isStopped }) {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
      />
    </div>
  );
}
