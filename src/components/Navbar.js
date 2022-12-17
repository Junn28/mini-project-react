import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

function Navbar(props) {
  return (
    <header className="flex justify-between lg:flex p-5 bg-cyan-500 drop-shadow-md lg:items-center lg:justify-between">
      <h1 className="text-gray-100 font-bold text-2xl">App-{props.name}</h1>
      <nav className="lg:space-x-4 lg:mt-0 mt-3 z-[-1] lg:z-auto lg:w-auto lg:static lg:opacity-100 opacity-0 w-full left-0 absolute bg-cyan-500">
        {[
          ['Home', '/'],
          ['Category', '/category'],
          ['Contact', '/contact'],
        ].map(([title, url], index) => (
          <Link to={url} key={index} className="text-white block lg:inline rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900">
            {title}
          </Link>
        ))}
      </nav>
      <Bars3Icon
        className="h-10 lg:hidden text-white"
        onClick={() => {
          const nav = document.querySelector('nav');

          nav.classList.toggle('opacity-100');
        }}
      />
    </header>
  );
}

export default Navbar;
