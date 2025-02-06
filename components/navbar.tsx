// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { BombIcon as Balloon, Menu, X } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "Events", href: "/events" },
//   { name: "Gallery", href: "/gallery" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <nav className="bg-primary text-primary-foreground">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <Balloon className="h-8 w-8 mr-2" />
//               <span className="font-bold text-xl">PartyTime</span>
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="md:hidden">
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-primary-foreground"
//                 >
//                   <span className="sr-only">Open menu</span>
//                   <Menu className="h-6 w-6" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                 <div className="flex items-center justify-between mb-6">
//                   <Link
//                     href="/"
//                     className="flex items-center"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <Balloon className="h-8 w-8 mr-2" />
//                     <span className="font-bold text-xl">PartyTime</span>
//                   </Link>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <X className="h-6 w-6" />
//                   </Button>
//                 </div>
//                 <nav className="flex flex-col space-y-4">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0  flex justify-between items-center w-full  px-4 py-8 ">
      <div className="text-white font-bold text-lg">🍸 Bassh</div>
      <button
        className="text-white md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 right-4 bg-black/90 md:bg-transparent p-4 md:p-0 rounded-lg space-y-2 md:space-y-0 md:space-x-4`}
      >
        <Link href="/about" className="text-white hover:underline">
          About
        </Link>
        <Link href="/events" className="text-white hover:underline">
          Events
        </Link>
        <Link href="/cart" className="text-white hover:underline">
          Blog
        </Link>
      </nav>
      <Button className="bg-pink-500 hover:bg-pink-600 hidden md:block">
        Buy Tickets
      </Button>
    </div>
  );
};

export default Navbar;
