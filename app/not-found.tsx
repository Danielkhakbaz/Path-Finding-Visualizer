import { Link } from "next-view-transitions";
import { FaHome } from "react-icons/fa";

const NotFound = async () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8">
      <h2 className="text-xl font-bold md:text-2xl">NOT FOUND!</h2>
      <h3 className="text-[8rem] font-extrabold md:text-[15rem]">404</h3>
      <div className="flex flex-col">
        <Link href="/">
          <button className="btn btn-primary gap-2">
            Back to the Home <FaHome fontSize={18} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
