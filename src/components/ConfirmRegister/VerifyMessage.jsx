// import { InputContact } from "./InputContact";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import http from "../../core/services/interceptor";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const VerifyMessage = () => {

  const  userinfo= useSelector((reducer)=>reducer.user);

  const onSubmit = async (values) => {
    const bodyVerify = {phoneNumber: userinfo.number,verifyCode:values.code};
    const result = await http.post("/Sign/VerifyMessage",bodyVerify);
    return result;
    console.log(result);
  };

  const validation = yup.object().shape({
    code: yup.number().required("لطفاکد تایید را وارد کنید."),
  });


  return (
    <>
      <Formik
        initialValues={{
          number: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>

            {/* Global Container */}
            <div className=" flex items-center justify-center   bg-bgLogRegFor  w-screen h-screen">
              {/* Card Container  */}
              <div className="flex  w-9/12 h-fit p-12 space-y-10  bg-white shadow-2xl rounded-2xl lg:flex-row  xs:flex-col-reverse ">
                {/* Right Side */}
                <div className=" w-1/3  flex flex-col justify-center sm:w-full xs:w-full ml-20">
                  <h1 className="justify-center font-mono sm:mb-5 sm:text-4xl font-bold text-center sm:text-center  xs:text-[26px] xs:mb-4">
                    تایید پیام
                  </h1>
                  {/* <div className="flex flex-col">
                    <p className="sm:font-semibold mb-2 whitespace-nowrap  sm:text-base  xs:text-[12px]">
                      لطفا شماره تماس خود را وارد نمایید :
                    </p>
                    <Input
                      className="fletext-center sm:py-2 border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light  w-full px-10 xs:py-1  sm:placeholder:text-base xs:placeholder:text-[13px] "
                      name="number"
                      value={values.number}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="number"
                      component={"p"}
                      className="error"
                    />
                  </div> */}
                  <div className="flex flex-col">
                    <p className="sm:font-semibold mb-2 whitespace-nowrap  sm:text-base  xs:text-[12px]">
                      لطفاکد فعالسازی را وارد نمایید :
                    </p>
                    <Input
                      className="fletext-center sm:py-2 border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light  w-full px-10 xs:py-1  sm:placeholder:text-base xs:placeholder:text-[13px] "
                      name="code"
                      value={values.code}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="code"
                      component={"p"}
                      className="error"
                    />
                  </div>
                  {/*Boutton */}
                  <div className="w-full mt-4 ">
                    <button
                      type="submit"
                      className=" w-full  flex justify-center items-center sm:p-3  md:px-6 md:py-2 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition   text-center hover:-translate-y-0.5 duration-150  xs:px-0  xs:py-1 xs:text-center  "
                    >
                      ارسال کد
                    </button>
                  </div>
                </div>
                {/* left Side  */}
                <div className=" sm:w-2/3 xs:relative xs:bottom-4 sm:relative sm:bottom-0 sm:mx-auto xs:mx-auto xs:w-full">
                  <img
                    src="assets/img/regPic.avif"
                    alt="registerPic"
                    className="w-max"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};
export { VerifyMessage };
