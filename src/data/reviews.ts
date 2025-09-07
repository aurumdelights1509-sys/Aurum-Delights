export interface Review {
  name: string;
  text: string;
  image: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    name: "Rajesh Gupta",
    text: "The best ladoos I've ever tasted! The perfect balance of sweetness and richness. My family loves them.",
    image: "/images/review-1.jpg",
    rating: 5
  },
  {
    name: "Sunita Verma",
    text: "Impressed by the quality and freshness. The dry fruit ladoos are a delight, especially during festivals.",
    image: "/images/review-2.jpg",
    rating: 5
  },
  {
    name: "Amitabh Joshi",
    text: "Exceptional customer service and packaging. These make perfect gifts for special occasions.",
    image: "/images/review-3.jpg",
    rating: 4
  },
  {
    name: "Priya Nair",
    text: "As someone with dietary restrictions, I appreciate the sugar-free options. Truly delicious!",
    image: "/images/review-4.jpg",
    rating: 5
  },
  {
    name: "Vikram Singh",
    text: "The chocolate ladoos are divine! My kids can't get enough of them. Highly recommended.",
    image: "/images/review-5.jpg",
    rating: 5
  },
  {
    name: "Anjali Reddy",
    text: "Fresh, delicious, and beautifully packaged. Aurum Delights has become my go-to for gifting.",
    image: "/images/review-6.jpg",
    rating: 4
  }
];