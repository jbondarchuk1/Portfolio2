'use client'


export const Reveal = ({text, size}:{text:string, size:string}) => {
  size = size ? size: "pt-10";
    return (
      <>
        <h1 className={"overflow-hidden text-white flex justify-center flex-nowrap " + size}>
          {text.match(/./gu)!.map((char, index) => (
            <span
              className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </>
    );
  };