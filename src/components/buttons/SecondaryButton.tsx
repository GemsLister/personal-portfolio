type SecondaryButtonProps = {
  children: React.ReactNode;
};

export const SecondaryButton = ({ children }: SecondaryButtonProps) => {
  return (
    <button className="bg-transparent text-primary border border-primary font-plus-jakarta-sans font-semibold py-2 px-4 rounded-md hover:bg-primary-hover hover:text-white transition-colors duration-300">
      {children}
    </button>
  );
};
