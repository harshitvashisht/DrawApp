"use client"

  type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'default' | 'large';
  className?: string;
  onClick?: () => void; // 
};

export default function Button({ children, variant = 'primary', size = 'default', className = '',   onClick ,...props }:ButtonProps){

    const baseClasses = "font-semibold rounded-xl cursor-pointer inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const sizes = {
      small: "px-4 py-2 text-sm",
      default: "px-8 py-4 text-lg",
      large: "px-12 py-6 text-xl"
    };
    
    const variants = {
      primary: "bg-gray-700 hover:bg-gray-600 text-white shadow-lg hover:shadow-xl focus:ring-gray-600/50",
      secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 shadow-lg hover:shadow-xl focus:ring-gray-600/50",
      outline: "bg-transparent text-white border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-500 focus:ring-gray-600/50"
    };

    return (
        //@ts-ignore
      <button onClick={onClick} className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );

}