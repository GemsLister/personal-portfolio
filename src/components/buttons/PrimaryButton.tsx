type PrimaryButtonProps = {
  children: React.ReactNode;
};

export const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <button className="bg-primary text-white font-plus-jakarta-sans font-semibold py-2 px-4 rounded-md hover:bg-primary-hover transition-colors duration-300">
      {children}
    </button>
  );
};
