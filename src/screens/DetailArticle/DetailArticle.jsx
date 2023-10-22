import { useState } from "react";
// import { ListArticleDetail } from "./ListArticleDetail";
import { SliderRelationNews } from "./SliderRelationNews";
import { Space, Tabs, Divider } from "antd";
// import myStyles from  '/src/menuTabs.module.css';
import "/src/menuTabs.css";
import { InsertComment } from "./InsertComment";
import { Comments } from "./Comments";

import {
  BsFillCheckCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

const DetailArticle = () => {
  const [articelList, setArticelList] = useState([
    {
      title: " 1آموزش جامع طراحی وب",
      date: "1402/07/19",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      date: "1402/07/18",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      date: "1402/07/17",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      date: "1402/07/20",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      date: "1402/07/16",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      date: "1402/07/11",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      date: "1402/07/17",
    },
    {
      title: " آموزش جامع طراحی وب",
      date: "1300/07/18",
      title: " آموزش جامع طراحی وب",
      date: "1300/07/18",
    },
    {
      title: " 2آموزش جامع طراحی وب",
      date: "1401/07/19",
    },
    {
      title: " 3آموزش جامع طراحی وب",
      date: "1400/07/19",
    },
    {
      title: " 4آموزش جامع طراحی وب",
      date: "1399/07/19",
    },
  ]);
};

// const items = [
//   {
//     key: 1,
//     lable: "جزئیات خبر",
//     children: <DetailArticle />,
//   },
//   {
//     key: 2,
//     lable: "نظرات",
//     children: <Comments />,
//   },
//   {
//     key: 3,
//     lable: "درج نظر",
//     children: <InsertComment />,
//   },
// ];
return (
  <>
    {/* Global Container */}

    <div className="w-full flex  flex-col   bg-bgDetail mx-auto p-5 ">
      {/* Top Container */}
      {/* sm:flex-row */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* Right Side */}
        <div className="w-full flex flex-col gap-6 lg:w-2/3  mx-auto justify-center">
          <div className="flex  flex-col md:flex-row justify-start gap-6   md:gap-16  lg:gap-28">
            {/*title */}
            <div className="flex gap-2 md:flex-col">
              <p className="text-sm font-bold whitespace-nowrap ">
                عنوان خبر :
              </p>
              <p className="text-[13px] font-semibold whitespace-nowrap ">
                {" "}
                دوره جامع آموزش ری اکت
              </p>
            </div>
            {/*category */}

            <div className="flex  gap-2 md:flex-col">
              <p className="text-sm font-bold whitespace-nowrap ">دسته خبر :</p>
              <p className="text-[13px] font-semibold whitespace-nowrap ">
                مقاله
              </p>
            </div>
          </div>
          {/*content article right side */}
          <div className="flex flex-col">
            <p className="text-sm font-bold ">متن خبر :</p>
            <p className="text-sm text-justify ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          {/*end content article right side */}

          {/*More Information  Section*/}
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-bold text-sm  ">اطلاعات بیشتر:</p>
            </div>
            <div className="flex flex-col gap-3 pr-2">
              <div className="flex flex-row gap-2">
                {/* <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="bg-bgbtns rounded-full text-white w-5 h-5"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg> */}
                <BsFillCheckCircleFill className=" rounded-full text-bgbtns w-4 h-4" />

                <BsFillCheckCircleFill className=" rounded-full text-bgbtns w-4 h-4" />
                <p className="text-[13px]  font-bold ">تاریخ انتشار خبر :</p>
                <span className=" text-[13px]">1402/07/19</span>
              </div>
              <div className="flex flex-row gap-2">
                <BsFillCheckCircleFill className=" rounded-full text-bgbtns w-4 h-4" />
                {/* <
                  <BsFillCheckCircleFill className=" rounded-full text-bgbtns w-4 h-4" />
                  {/* <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="bg-bgbtns rounded-full text-white w-5 h-5"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg> */}

                <p className="text-[13px]  font-bold ">دسته بندی:</p>
                <span className="text-[13px] ">مقاله</span>
              </div>
            </div>
          </div>
          {/*end More Information  Section*/}
        </div>
        {/* end Right Side */}
        {/* Left Side */}
        <div>
          {/* Images */}
          <div className="w-full  mx-auto justify-center  ">
            <img
              src="/public/assets/img/detailNewsPic.webp"
              className="mx-auto justify-center"
              className="mx-auto justify-center"
              alt="newsPic"
            />
          </div>
        </div>
        {/* end Left Side */}
      </div>
      {/* end Top Container */}

      {/*Border Split Top and Below*/}
      <div className="w-full mt-14 mb-6">
        <div className="w-full  border-2 border-bg-bgBorderSplit"></div>
        <div className="mx-auto relative bottom-4  items-center  bg-bgDetail  w-fit h-fit px-3">
          <p className="text-sm text-center font-irSans md:text-lg">
            اخبار مرتبط
          </p>
        </div>
      </div>
      {/* end Border Split Top and Below */}

      {/*The ListOf Related news and articles */}
      <div className="">
        {/* <ListArticleDetail articelList={articelList} /> */}
        <SliderRelationNews articelList={articelList} />
      </div>
      {/* end The ListOf Related news and articles */}
      <div className="flex justify-center">
        <BsFillArrowDownCircleFill className="rounded-full text-bgArrowDown w-8 h-8 md:w-12 md:h-12 relative  top-8 md:top-10" />
      </div>
      <div className="flex justify-center">
        <BsFillArrowDownCircleFill className="rounded-full text-bgArrowDown w-8 h-8 md:w-12 md:h-12 relative  top-8 md:top-10" />
      </div>
    </div>
    {/*end Global Container */}
  </>
);
export { DetailArticle };
