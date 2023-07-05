import React from "react";
import urlFor  from "./urlFor";
import Image from "next/image";
import Link from "next/link";

export const portableTextComponents = {
  types: {
    image: ({ value, isInline }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="overflow-clip">
          {/* <div className="overflow-clip my-32 h-[360px]"> */}
          <Image
            src={urlFor(value)}
            height={360}
            width={640}
            alt={value.alt || " "}
            // sizes="100vw"
            priority
            aspectRatio={"16:9"}
            style={{
              width: "100%",
              height: "auto",
              display: isInline ? "inline-block" : "block",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      );
    },
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <Link href={value.url}>{value.text}</Link>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  block: {
    // prettier-ignore

    normal: ({ children }) => <p className="!my-[32px]">{children}</p>,
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl font-[500]">{children}</h1>,
    // prettier-ignore
    h2: ({ children }) => <h2 className="text-[48px] leading-[56px] font-[500] font-messina my-32">{children}</h2>,
    // prettier-ignore

    h3: ({ children }) => <h3 className="text-[30px] leading-[44px] font-[500]  my-32">{children}</h3>,
    // prettier-ignore

    h4: ({ children }) => <h4 className="text-[24px] leading-[36px] font-[600] my-32">{children}</h4>,
    //prettier-ignore
    h5: ({ children }) => <h5 className="text-[20px] leading-[32px] font-[600] mb-16 max-w-[80%] mt-[56px]">{children}</h5>,
    // prettier-ignore

    h6: ({ children }) => <h6 className="text-[18px] font-messina leading-[24px] font-[600] my-32">{children}</h6>,
    // prettier-ignore

    blockquote: ({ children }) => (
    // prettier-ignore

      <blockquote className="border-l-woody/50 relative text-3xl bg-woody/5 p-[32px] font-[400] rounded-lg"><div className="absolute opacity-20 top-96 font-inter text-[256px]">&lsquo;</div><div className="z-9 mt-[16px]">{children}</div></blockquote>
      // <blockquote className="border-l-woody/50 text-xl bg-woody/5 ml-[32px] p-[32px] font-[500] border-l-4 rounded-lg rounded-l-none">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) =>
      // prettier-ignore

      <h2 className="text-lg text-primary text-purple-700">{children}</h2>,
  },
  //marks for decorators, em, italics, links etc
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    //em: ({ children }) => <em className="">{children}</em>,
      em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,


    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          className=" underline"
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </Link>
      );
    },
  },
  //List
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  //Listitem
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "none" }} className="ml-16">
        {children}
      </li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};

// export default portableTextComponents;