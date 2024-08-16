interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <>
      <div onClick={onClick} className="cursor-pointer">
        {children}
      </div>
    </>
  );
};

export default IconButton;
