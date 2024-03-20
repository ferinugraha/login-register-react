import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="container mt-4">
        <h4 className="text-center mb-5">Selamat Datang Di Download</h4>
        <div className="d-flex justify-content-between">
          <div className="text-center">
            <h5>Download file 1</h5>
            <img src="https://picsum.photos/200" alt="gambar" />
            <p>Save Foto di atas</p>
            <a
              href="https://picsum.photos/200"
              download
              className="btn btn-primary"
            >
              Download
            </a>
          </div>
          <div className="text-center">
            <h5>Download file 2</h5>
            <img src="https://picsum.photos/202" alt="gambar" />
            <p>Save Foto di atas</p>
            <a
              href="https://picsum.photos/202"
              download
              className="btn btn-primary"
            >
              Download
            </a>
          </div>

          <div className="text-center">
            <h5>Download file 3</h5>
            <img src="https://picsum.photos/201" alt="gambar" />
            <p>Save Foto di atas</p>
            <a
              href="https://picsum.photos/201"
              download
              className="btn btn-primary"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
