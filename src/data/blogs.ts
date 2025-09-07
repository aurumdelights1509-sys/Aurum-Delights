export interface Blog {
  title: string;
  summary: string;
  author: string;
  date: string;
  url: string;
  category: string;
  readTime: string;
}

export const blogs: Blog[] = [
  {
    title: "The Art of Perfect Ladoo Making",
    summary: "Discover the traditional techniques and modern innovations that go into creating our signature ladoos. From selecting the finest ingredients to perfecting the texture.",
    author: "Priya Sharma",
    date: "May 15, 2023",
    url: "#",
    category: "Recipes",
    readTime: "5 min read"
  },
  {
    title: "Health Benefits of Dry Fruits in Sweets",
    summary: "Learn how our carefully selected nuts and dry fruits contribute to a healthier indulgence. Discover the nutritional value of our ingredients.",
    author: "Dr. Anil Kumar",
    date: "June 2, 2023",
    url: "#",
    category: "Health",
    readTime: "4 min read"
  },
  {
    title: "Celebrating Festivals with Aurum Delights",
    summary: "How our ladoos have become an integral part of celebrations across India. Stories from our customers and their festive traditions.",
    author: "Meera Patel",
    date: "July 20, 2023",
    url: "#",
    category: "Culture",
    readTime: "6 min read"
  }
];