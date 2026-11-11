type PrimaryButtonProps = {
  children: React.ReactNode;
  href: string;
};

export const PrimaryButton = ({ children, href }: PrimaryButtonProps) => {
  return (
    <a
      href={href}
      className="inline-flex items-center bg-primary text-white font-plus-jakarta-sans font-semibold py-2 px-4 rounded-md hover:bg-primary-hover transition-colors duration-300"
    >
      {children}
    </a>
  );
};
