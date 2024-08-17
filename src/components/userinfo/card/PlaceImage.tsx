interface PlaceImageProps {
  src: string;
  alt: string;
}

const PlaceImage = ({ src, alt }: PlaceImageProps) => {
  return (
    <div className="overflow-hidden rounded-lg min-w-60">
      <img className="object-fill hover:animate-zoom-in h-60 w-60" src={src} alt={alt} />
    </div>
  );
};

export default PlaceImage;
