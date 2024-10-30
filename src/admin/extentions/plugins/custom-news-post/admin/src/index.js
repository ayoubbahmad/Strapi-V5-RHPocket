import React, { useState } from 'react';
import { MediaLib } from '@strapi/helper-plugin';

const MediaSelector = ({ onChange, name, value }) => {
  const [mediaType, setMediaType] = useState(null);
  const [showMediaLib, setShowMediaLib] = useState(false);

  const handleMediaChange = (media) => {
    // Detect file type from media
    const fileType = detectFileType(media);
    setMediaType(fileType);
    
    // Update the form values
    onChange({
      mediaType: fileType,
      media: media
    });
  };

  const detectFileType = (media) => {
    const mimeType = media.mime;
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('video/')) return 'video';
    if (mimeType.startsWith('audio/')) return 'audio';
    return 'file';
  };

  return (
    <div>
      <button onClick={() => setShowMediaLib(true)}>
        Select Media
      </button>

      {showMediaLib && (
        <MediaLib
          onClose={() => setShowMediaLib(false)}
          onSelectAssets={(media) => handleMediaChange(media[0])}
        />
      )}

      {mediaType && (
        <div>
          Selected type: {mediaType}
          {/* Display preview based on mediaType */}
        </div>
      )}
    </div>
  );
};

export default MediaSelector;