import "./App.css";

function App() {
  const tracks = [
    {
      title: "music track 1",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      title: "instrumental",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
    {
      title: "music track 2",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
      title: "instrumental 2",
      url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
  ];

  return (
    <>
      {tracks.map((track, index) => (
        <div key={index}>
          <h3>{track.title}</h3>
          <audio controls>
            <source src={track.url} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </>
  );
}

export default App;
