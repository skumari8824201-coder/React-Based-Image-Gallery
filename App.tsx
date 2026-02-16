import { useState, useEffect, FormEvent } from "react";

interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

function App() {
  const API_KEY = import.meta.env.VITE_PIXABAY_KEY as string;

  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("nature");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const fetchImages = async (searchQuery = query, pageNumber = page) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${pageNumber}&per_page=12`
      );

      const data = await response.json();

      if (pageNumber === 1) {
        setImages(data.hits);
      } else {
        setImages((prev) => [...prev, ...data.hits]);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchImages(query, page);
    }
  }, [page]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchImages(query, 1);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="header">
        <h1>React-Based Image Gallery</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="gallery">
        {images.map((img) => (
          <div
            key={img.id}
            className="card"
            onClick={() => setSelectedImage(img.largeImageURL)}
          >
            <img src={img.webformatURL} alt={img.tags} />
          </div>
        ))}

        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="skeleton"></div>
          ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" />
        </div>
      )}

      <style>{`
        body { margin: 0; font-family: "Segoe UI", sans-serif; }
        .app { padding: 20px; background: #f4f6f8; min-height: 100vh; transition: 0.3s; }
        .dark { background: #121212; color: white; }
        .header { display: flex; justify-content: space-between; align-items: center; }
        form { margin: 20px 0; text-align: center; }
        input { padding: 10px; width: 250px; border-radius: 5px; border: 1px solid #ccc; }
        button { padding: 10px 15px; margin-left: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background: #0056b3; }
        .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; }
        .card { overflow: hidden; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s ease; }
        .card:hover { transform: scale(1.05); }
        .card img { width: 100%; height: 200px; object-fit: cover; }
        .skeleton { height: 200px; border-radius: 10px; background: linear-gradient(90deg,#e0e0e0 25%,#f0f0f0 50%,#e0e0e0 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; }
        .modal img { max-width: 90%; max-height: 90%; border-radius: 10px; }
      `}</style>
    </div>
  );
}

export default App;
