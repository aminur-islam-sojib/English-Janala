import alert from '../../assets/alert-error.png';

const EmptyLesson = () => {
  return (
    <>
      <section className=" text-center w-[80%] mx-auto mt-5 bg-gray-100 rounded-2xl py-10">
        <div className=" flex justify-center">
          <img src={alert} alt="" />
        </div>
        <p className=" bangla text-gray-500 text-sm my-3.5">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h1 className=" text-3xl font-medium">নেক্সট Lesson এ যান</h1>
      </section>
    </>
  );
};

export { EmptyLesson };
