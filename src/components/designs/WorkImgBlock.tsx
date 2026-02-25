export const WorkImages = ({ images, altPrefix }) => {
    return (
      <div className="space-y-4 mb-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${altPrefix} image ${index + 1}`}
            className="w-full h-[20rem] object-contain rounded-[2.3rem] bg-white shadow p-2"
          />
        ))}
      </div>
    );
  };
  