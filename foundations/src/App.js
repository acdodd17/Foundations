import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">Hello There!</h1>
      </div>
      <main>
        <div className="book">
          <div className="cover">Title</div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="last-page">
            <h2 className="end-text">The End</h2>
          </div>
          <div className="back-cover"></div>
        </div> 
        {/* book with flipping pages */}
        {/* typewriter message */}
        {/* typewriter keys? */}
      </main>
    </div>
  );
}

export default App;
