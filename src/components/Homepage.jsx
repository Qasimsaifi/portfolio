import useTypewriter from "@/utils/Typewritter";

const Homepage = () => {

  function Typewriter(props) {
    const currentText = useTypewriter(props.texts, props.speed);
    return <span>{currentText}</span>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl sm:text-7xl md:text-9xl font-bold text-purple-500">Hi, I'm Qasim</h1>
      <h2 className="text-2xl sm:text-4xl md:text-6xl mt-2 text-gray-600">
        I'm a Web <Typewriter texts={["Developer", "Designer", "Engineer"]} speed={220} />|
      </h2>
    </div>
  </div>
  
  );
};

export default Homepage;
