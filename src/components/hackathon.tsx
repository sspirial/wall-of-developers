import { useState } from "react";
import "../App.css";
import data from "../data.json";
const placeholderImg = "https://via.placeholder.com/150";

function Hackathon() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
  });

  const handleImageLoad = (imageName: string) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  const images = data.hackathon.images.map((img: any, idx: number) => ({
    src: new URL(`../assets/${img.src}`, import.meta.url).href,
    alt: img.alt,
    id: `image${idx + 1}`,
  }));

  return (
    <div id="hackathon" className="hackathon-section">
      <div className="hackathon-container">
        <h1 className="hackathon-title">{data.hackathon.title}</h1>
        <div className="hackathon-image-row">
          {images.map((image) => (
            <div key={image.id} className="hackathon-image-wrapper">
              {!imagesLoaded[image.id] && (
                <div className="hackathon-image-loading">
                  <span>Loading...</span>
                </div>
              )}
              <img
                src={image.src}
                alt={image.alt}
                className={
                  imagesLoaded[image.id]
                    ? "hackathon-image opacity-100"
                    : "hackathon-image opacity-0"
                }
                onLoad={() => handleImageLoad(image.id)}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = placeholderImg;
                  handleImageLoad(image.id);
                }}
              />
            </div>
          ))}
        </div>
        <div className="hackathon-text-container">
          <h2 className="hackathon-subtitle">About Our Hackathons</h2>
          <div className="hackathon-text">
            {data.hackathon.about.map((text: string, idx: number) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
