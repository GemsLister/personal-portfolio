type SecondaryButtonProps = {
  children: React.ReactNode;
  href: string;
};

export const SecondaryButton = ({ children, href }: SecondaryButtonProps) => {
  return (
    <a
      href={href}
      className="bg-transparent text-primary border border-primary font-plus-jakarta-sans font-medium py-2 px-4 rounded-md hover:bg-primary-hover hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
};
