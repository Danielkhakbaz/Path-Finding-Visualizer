"use client";

import { Link } from "next-view-transitions";
import { FaHome } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-2xl">THERE IS A PROBLEM!</h2>
        <div className="mockup-code">
          <pre data-prefix=">" className="text-error">
            {error.message}
          </pre>
        </div>
        <p className="text-xl font-semibold">
          Please try again. If the problem persists, fell free to contact me!
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            className="btn btn-warning flex items-center gap-2"
            onClick={reset}
          >
            Try Again
            <FaArrowRotateLeft />
          </button>
          <Link href="/">
            <button className="btn btn-primary gap-2">
              Back to the Home <FaHome fontSize={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
