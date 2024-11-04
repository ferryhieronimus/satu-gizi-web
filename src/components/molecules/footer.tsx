"use client";
import { ArrowLeftIcon, CameraIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../atoms/button";

const Footer = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState("environment");
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
    stopCameraStream();
  };

  const startCamera = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support camera access.");
      setIsCameraOpen(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing the camera: ", error);
      alert("Unable to access the camera. Please check your permissions.");
      setIsCameraOpen(false);
    }
  };

  const stopCameraStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const width = videoRef.current.videoWidth;
      const height = videoRef.current.videoHeight;

      // Set canvas dimensions
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      // Get the 2D drawing context
      const context = canvasRef.current.getContext("2d");
      if (context) {
        // Draw the current frame from the video onto the canvas
        context.drawImage(videoRef.current, 0, 0, width, height);

        // Convert the canvas image to a data URL
        const imageDataURL = canvasRef.current.toDataURL("image/png");
        setCapturedPhoto(imageDataURL);

        // Close the camera stream
        handleCloseCamera();
      } else {
        console.error("Failed to get 2D context from the canvas.");
      }
    } else {
      console.error("Video or canvas element not found.");
    }
  };

  useEffect(() => {
    if (isCameraOpen) {
      startCamera();
    } else {
      stopCameraStream();
    }

    return () => {
      stopCameraStream();
    };
  }, [isCameraOpen, facingMode]);

  return (
    <>
      {/* display the captured photo */}
      {capturedPhoto && (
        <div className="fixed left-0 top-0 z-10 flex flex-col gap-6 h-svh w-full items-center justify-center bg-gray-300/75 p-6">
          <button
            onClick={() => {
              setCapturedPhoto(null);
              handleCloseCamera();
            }}
            className="absolute left-4 top-4 z-10 rounded-full bg-white p-2 shadow-md"
          >
            <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          <div className="rounded-3xl bg-white p-3">
            <img src={capturedPhoto} alt="Captured" className="captured-photo rounded-md" />
          </div>

          <div className="item-center mt-4 flex w-full gap-2">
            <Button
              onClick={() => {
                setCapturedPhoto(null);
                setIsCameraOpen(true);
              }}
              type="button"
              variant="destructive"
              className="h-14 w-full rounded-2xl"
            >
              Retake Photo
            </Button>
            <Button type="button" variant="secondary" className="h-14 w-full rounded-2xl">
              <a href={capturedPhoto} download="photo.png">
                Save Photo
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* display the video stream when the camera is open */}
      {isCameraOpen && (
        <div className="fixed left-0 top-0 z-10 flex flex-col gap-6 h-svh w-full items-center justify-center bg-gray-300/75 p-6">
          <div className="rounded-3xl bg-white p-3">
            <button
              onClick={handleCloseCamera}
              className="absolute left-4 top-4 z-10 rounded-full bg-white p-2 shadow-md"
            >
              <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
            </button>

            <video ref={videoRef} autoPlay playsInline className="rounded-md"></video>
            <canvas ref={canvasRef} className="hidden"></canvas>
          </div>

          <button onClick={capturePhoto} className="mx-auto w-max rounded-full bg-white p-4 shadow-md">
            <CameraIcon className="h-8 w-8 text-gray-700" />
          </button>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 w-full rounded-t-3xl bg-primary p-6">
        <div className="absolute bottom-3 left-[calc(50%-2rem)] rounded-xl bg-gray-100 p-3">
          <CameraIcon className="h-8 w-8 text-black" onClick={handleOpenCamera} />
        </div>
      </footer>
    </>
  );
};

Footer.displayName = "Footer";

export { Footer };
