import dice from "./images/icon-dice.svg";
import dividerDesk from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import { useState, useEffect } from "react";

const AdviceBox = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const url = "	https://api.adviceslip.com/advice";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-[var(--D-Grayish-Blue)] rounded-xl md:w-[500px] w-[80%] p-10 text-center relative">
      <h1 className="md:text-2xl text-xl text-[var(--NeonGreen)] uppercase">
        Advice
      </h1>
      <p className="py-4 md:text-3xl text-2xl text-[var(--LightCyan)]">
        {advice}
      </p>
      <div className="py-6 flex items-center justify-center">
        <img src={dividerDesk} alt="/" className="md:block hidden" />
        <img src={dividerMobile} alt="/" className="md:hidden block" />
      </div>
      <button
        onClick={fetchAdvice}
        className="rounded-full bg-[var(--NeonGreen)] p-4  absolute md:left-[14rem]  left-[43.5%] mt-2 cursor-pointer hover:shadow-[0px_5px_30px_-5px] hover:shadow-[var(--NeonGreen)]"
      >
        <img src={dice} alt="/" />
      </button>
    </div>
  );
};

export default AdviceBox;
