import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ href, children, className }: ButtonProps) => {
  return (
    <div>
      <a
        href={href}
        className={`bg-[#374151] hover:bg-[#11141a] my-3 text-white py-3 px-6 rounded-lg text-lg transition duration-300 ${className}`}
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
