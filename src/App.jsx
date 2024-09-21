import Generator from './components/generator';
import Hero from './components/hero';
import Workout from './components/workout';

function App() {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-basenpm start'>
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
}

export default App;
