type ScrollButtonProps = {
  children: React.ReactNode;
  scroll: () => void;
  arialLabel: string;
};

export const ScrollButton = ({
  scroll,
  children,
  arialLabel,
}: ScrollButtonProps) => {
  return (
    <button
      type="button"
      onClick={scroll}
      aria-label={arialLabel}
      className="rounded-full border border-primary p-2 text-primary transition-colors hover:bg-primary hover:text-white"
    >
      {children}
    </button>
  );
};
