import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="flex justify-center items-center gap-2 bg-gray-900 hover:bg-gray-950 dark:bg-white disabled:bg-opacity-65 dark:bg-opacity-10 rounded-full w-[8rem] h-[3rem] text-white transition-all group outline-non focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100"
            disabled={pending}
            // onClick={(e) => e.preventDefault()}
        >
            {pending ? (
                <div className="border-white border-b-2 rounded-full w-5 h-5 animate-spin"></div>
            ) : (
                <>
                    Submit{" "}
                    <FaPaperPlane className="opacity-70 text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            )}
        </button>
    );
}
