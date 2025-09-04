import headerImg from '../../assets/hero-student.png';

const Header = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-[80%] mx-auto md:justify-between">
        <section className=" md:w-1/2 flex flex-col text-center md:text-left justify-center align-middle">
          <h1 className="font-bold text-5xl">
            <span className=" text-[#00BCFF]">English</span> is Easy!!
          </h1>
          <p className="bangla text-2xl font-medium my-6">
            আজ থেকেই আপনার ভাষা শেখার যাত্রা শুরু করুন। আপনি যদি নতুন হন অথবা
            আপনার দক্ষতা বাড়াতে চান, আমাদের Interactive Lessons আপনাকে নিয়ে যাবে
            অন্য একটি Level এ
          </p>

          <div className=" flex flex-col gap-2 items-center md:items-start">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-neutral focus:outline-0"
            />
            <input
              type="text"
              placeholder="Enter Your Pass"
              className="input input-neutral focus:outline-0"
            />
            <div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </section>
        <section className="">
          <div>
            <img src={headerImg} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export { Header };
