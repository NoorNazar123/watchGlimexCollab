import React from "react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-[#caad05] to-[#8b6f02] 
             hover:from-[#e4c10a] hover:to-[#5a4801] my-3 text-white py-3 px-6 rounded-lg text-lg transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

// import React from "react";

// interface ButtonProps {

//   children: React.ReactNode;
//   className?: string;
// }

// const Button = ({ children, className }: ButtonProps) => {
//   return (
//     <>
//       <span

//         className={`bg-[#374151] hover:bg-[#11141a] my-3 text-white py-3 px-6 rounded-lg text-lg transition duration-300 ${className}`}
//       >
//         {children}
//       </span>
//     </>
//   );
// };

// export default Button;
