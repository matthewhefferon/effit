import './App.css';
import VideoJS from "./components/VideoJS"
import video from "./video/effit.mp4"

function App() {
  const videoJSOptions = {
    autoplay: false,
    controls: true,
    sources: [{
      src: video,
      type: 'video/mp4'
    }]
  }
  return (
    <div className="App">
      <VideoJS options={videoJSOptions} />
    </div>
  );
}

export default App;
