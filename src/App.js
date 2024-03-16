import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* <div className='w-100 justify-items-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        <div className='basis-1/6 bg-red-500'>1</div>
        <div className='basis-1/6 bg-green-500'>2</div>
        <div className='basis-1/6 bg-blue-500'>3</div>
        <div className='basis-1/6 bg-yellow-500'>4</div>
        <div className='basis-1/6 bg-pink-500'>5</div>
        <div className='basis-1/6 bg-purple-500'>6</div>
      </div> */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-stretch h-48 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
    </div>
  );
}

export default App;
