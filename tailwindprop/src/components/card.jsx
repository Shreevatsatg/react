import React from 'react'

function Card(props) {
console.log(props)
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29022983/pexels-photo-29022983/free-photo-of-coffee-and-cake-with-chestnut-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          shreevatsa
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Software  Engineer, google
        </div>
      </figcaption>
    </div>
  </figure>
  )
}

export default Card