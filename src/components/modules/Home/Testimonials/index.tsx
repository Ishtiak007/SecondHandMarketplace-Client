"use client";
import { InfiniteMovingCards } from "../../../ui/infinite-moving-cards";

export function TestimonialsCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-center text-teal-700 mb-6 sm:mb-8">
        People about us
      </h2>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "SecondHand Marketplace is a well-designed platform that makes buying and selling used products simple. The interface is user-friendly, and managing listings is effortless. I especially appreciate the bookmark and history features, which help me stay organized. It’s a trusted solution for secondhand transactions.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I had a smooth experience using SecondHand Marketplace. Posting, updating, and deleting products was quick and clear. The purchase and sales history features keep everything in check. It’s a secure and efficient platform for users wanting to buy or sell old items with confidence.",
    name: "William Shakespeare",
    title: "Hamlet",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Using SecondHand Marketplace has been a breeze. The design is clean, and I found the features intuitive. Bookmarking products and checking past transactions make the process simple. It’s a reliable space for anyone looking to get value from pre-owned goods without any hassle at all.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "SecondHand Marketplace makes secondhand shopping feel professional. Everything from listing items to managing them works perfectly. The ability to track sales and purchases adds real value. It’s great for both casual users and serious sellers who want a secure, easy-to-use platform to manage transactions.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I really enjoy using SecondHand Marketplace. It’s easy to list, update, and manage products. The UI is sleek and straightforward. Bookmarking favorite items is a nice bonus, and the transaction history is helpful. It’s an all-in-one tool for secondhand buyers and sellers alike.",
    name: "Herman Melville",
    title: "Moby-Dick",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
