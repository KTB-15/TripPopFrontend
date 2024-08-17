interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  rounded?: boolean;
}

const IconButton = ({ children, onClick, rounded }: IconButtonProps) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`cursor-pointer ${rounded ? 'border-option rounded-full border px-1 py-1' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default IconButton;
