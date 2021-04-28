import React, { useEffect } from 'react';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle as circle } from '@fortawesome/free-regular-svg-icons';
import { isBrowser } from 'react-device-detect';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../../overmind';

import './CameraComponent.scss';

const CameraComponent = ({ frontCamera = false, redirectUrl, title = '', subtitle = '' }) => {
  let cameraPhoto = null;
  let facingMode;
  let videoClass;

  if (frontCamera) {
    videoClass = 'mirror';
    facingMode = FACING_MODES.USER;
  } else {
    videoClass = isBrowser ? 'mirror' : '';
    facingMode = FACING_MODES.ENVIRONMENT;
  }
  const history = useHistory();

  const { actions } = useOvermind();

  const videoRef = React.createRef();

  useEffect(() => {
    cameraPhoto = new CameraPhoto(videoRef.current);
    cameraPhoto.startCamera(facingMode, { width: 640, height: 480 });

    return function cleanup() {
      cameraPhoto
        .stopCamera()
        .then()
        .catch((error) => {
          console.log('No camera to stop!:', error);
        });
    };
  });

  return (
    <div className="text-center CameraComponent">
      <div className="back-btn-container text-left">
        <button
          className="btn"
          onClick={() => {
            goBack();
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>
      <div className="top-container">
        <h1 className="primary-font title">
          <Translation>{(t) => t(title)}</Translation>
        </h1>
      </div>
      <div className="mx-auto video-container">
        <video
          className={`mx-auto ${videoClass}`}
          playsInline
          ref={videoRef}
          autoPlay={true}
          style={{ display: 'flex', width: '80%' }}
        />
      </div>
      <div className="bottom-container">
        <h1 className="secondary-font sub-title">
          <Translation>{(t) => t(subtitle)}</Translation>
        </h1>
      </div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            takePhoto(cameraPhoto);
          }}
        >
          <FontAwesomeIcon
            icon={faCircle}
            size="3x"
            style={{ position: 'absolute', marginRight: '8px', marginTop: '8px' }}
          />
          <FontAwesomeIcon icon={circle} size="4x" />
        </button>
      </div>
    </div>
  );

  function takePhoto(cameraPhoto) {
    const config = {
      sizeFactor: 1,
    };
    actions.setCapturedImageUri(cameraPhoto.getDataUri(config));
    history.push(redirectUrl);
  }

  function goBack() {
    history.goBack();
  }
};

export default CameraComponent;
