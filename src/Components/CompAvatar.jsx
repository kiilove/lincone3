import React, { useState } from "react";
import ImageUpload from "image-upload-react";
//important for getting nice style.

function CompAvatar() {
  const [imageSrc, setImageSrc] = useState();

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <ImageUpload
      handleImageSelect={handleImageSelect}
      imageSrc={imageSrc}
      setImageSrc={setImageSrc}
      style={{
        width: 100,
        height: 100,
        background: "red",
      }}
    />
  );
}

export default CompAvatar;
