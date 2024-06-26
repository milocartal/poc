// components/PhotoUploader.js
import React, { useState } from "react";

const PhotoUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target!.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
