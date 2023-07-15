import Image from 'next/image';

const BlurredImage = ({ src, alt}) => {
  return (
    <div className="blurred-image">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        placeholder="blur" // Set placeholder value to "blur"
        blurDataURL={src} // Provide the same image source as blurDataURL
      />
    </div>
  );
};

export default BlurredImage;
