import React from 'react';

function Contact() {
  return (
    <div className="container w-3/4 bg-gray-100 mx-auto mt-3 p-3 rounded-md">
      <p className="block text-xl font-semibold text-slate-700 text-center">Contact Me</p>
      <form>
        <label className="block">
          <span className="block text-md font-medium text-slate-700">Name</span>
          <input
            type="text"
            placeholder="Type here..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>
        <label className="block">
          <span className="block text-md font-medium text-slate-700">Email</span>
          <input
            type="email"
            placeholder="Type here..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>
        <label className="block">
          <span className="block text-md font-medium text-slate-700">Message</span>
          <textarea
            rows="5"
            placeholder="Type here..."
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 resize-none"
          ></textarea>
        </label>
        <button className="bg-cyan-500 rounded-md p-2 w-1/4 text-md font-medium text-white my-2 hover:bg-white hover:text-slate-700 hover:border-solid hover:border-2 hover:border-cyan-600">Send</button>
      </form>
    </div>
  );
}

export default Contact;
