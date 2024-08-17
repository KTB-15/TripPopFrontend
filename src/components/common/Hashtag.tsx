const Hashtag = ({ text }: { text: string }) => {
  return <span className="px-2 py-1 text-sm border rounded-lg border-blue-light text-blue-light">#{text}</span>;
};

export default Hashtag;
