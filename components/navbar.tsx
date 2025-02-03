import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-center">
        <ul className="flex gap-8 text-lg font-semibold tracking-wide">
          <li>
            <Link href="/" className="hover:underline hover:text-gray-200 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/items" className="hover:underline hover:text-gray-200 transition duration-200">
              Tasks
            </Link>
          </li>
          <li>
            <Link href="/items/create" className="hover:underline hover:text-gray-200 transition duration-200">
              Create-Tasks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


// import React from 'react'
// import Link from 'next/link'

// function navbar() {
//   return (
//     <div>
//     <nav>
//       <ul className="flex gap-4 ">
//         <Link href={"/items"}><li>items</li></Link>
//         <Link href={"/items/create"}><li>create-item</li></Link>
//       </ul>
//     </nav>

//   </div>
//   )
// }

// export default navbar