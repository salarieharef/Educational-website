import React, { useEffect } from "react";
import bgImg from "../../assets/images/giphy.gif";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 8000);
  }, []);

  return (
    <div className="flex justify-center items-center w-full md:h-[100vh] bg-primary border border-transparent font-irSans">
      <section className="flex flex-col-reverse md:flex-row justify-between container w-[80%] h-[80%] bg-white rounded-3xl">
        <div className="w-[80%] md:w-[40%] flex flex-col  justify-center mx-auto">
          <h4 className="mt-10 text-sm md:text-xl text-center font-semibold text-slate-700">
            صفحه مورد نظر شما در دسترس نمی‌باشد.
          </h4>

          <p className="my-10 text-center text-xs md:text-sm text-slate-400">
            تا لحظاتی دیگر به صفحه اصلی هدایت خواهید شد.
          </p>
        </div>
        <div className="w-[80%] md:w-[40%] mx-auto flex items-center mt-5 md:mt-0 overflow-hidden">
          <img
            className="w-fit h-fit object-fit"
            src={bgImg}
            alt="Reset Password"
          />
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
