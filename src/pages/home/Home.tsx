import { memo } from "react";

const Home = () => {
  return (
    <section>
      <div className="container min-h-screen mx-auto flex justify-center items-center">
        <div>
          <h1 className="text-black text-2xl">Hello everyone !</h1>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
