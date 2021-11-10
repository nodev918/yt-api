import './App.css';
import Navbar from './components/Navbar'
import YT from './components/views/YT'

//AIzaSyCvqVARKsbw49Qv-0yUJQjKYVFew2IVfSQ
/*
https://youtube.googleapis.com/youtube/v3/videos?part=snippet%20&chart=mostPopular&maxResults=10&key=AIzaSyCvqVARKsbw49Qv-0yUJQjKYVFew2IVfSQ
*/

function App() {
  return (
    <>
      <Navbar />
      <YT />
    </>
  );
}

export default App;
