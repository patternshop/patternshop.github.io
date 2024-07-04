import MyTitle from "@/components/my-title";

function Videos() {
  return (
    <div className="space-y-5">
      <MyTitle>Video tutorial</MyTitle>
      <div className="aspect-w-16 aspect-h-9 w-full">
        <iframe
          src="https://www.youtube.com/embed/fGaLheahpJA?si=18y6rsZ3jNO6FuD3"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="aspect-w-16 aspect-h-9 w-full">
        <iframe
          src="https://www.youtube.com/embed/O7FCujmKwX0?si=XznK4NbQgw0a-qEx"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-sm">
        We gratefully thank BoundingSquirres for the video.
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-5 p-5">
      <Videos />
    </div>
  );
}
