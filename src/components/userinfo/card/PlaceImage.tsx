interface PlaceImageProps {
  src: string;
  alt: string;
}

const PlaceImage = ({ src, alt }: PlaceImageProps) => {
  return (
    <div className="overflow-hidden rounded-lg min-w-40 sm:min-w-60">
      <img className="object-fill w-40 h-40 hover:animate-zoom-in sm:h-60 sm:w-60" src={src} alt={alt} />
    </div>
  );
};

export default PlaceImage;
