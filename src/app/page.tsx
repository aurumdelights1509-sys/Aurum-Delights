import AnimatedBanner from '@/components/AnimatedBanner';
import HomeClient from '@/components/HomeClient';

// Server-side data fetching
async function getProducts() {
  // Return mock data in development if API is not available
  if (process.env.NODE_ENV === 'development') {
    return [
      {
        _id: '1',
        name: 'Ladoo Raja',
        description: 'Traditional sweet made from tiny chickpea flour balls soaked in sugar syrup',
        price: 350,
        image: '/images/1.png',
      },
      {
        _id: '2',
        name: 'Ladoo Rani',
        description: 'Rich ladoos packed with premium nuts and dry fruits',
        price: 450,
        image: '/images/5.png',
      },
      {
        _id: '3',
        name: 'Dryfruit chocolate bar',
        description: 'Decadent chocolate-flavored ladoos with dry fruits and cocoa richness',
        price: 400,
        image: '/images/7.png',
      }
    ];
  }
  
  try {
    const res = await fetch("/api/products", { 
      cache: 'no-store',
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Home() {
  const allProducts = await getProducts();
  
  // Mock data for reviews
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The Dry Fruit Ladoo exceeded my expectations! The perfect blend of premium nuts and just the right sweetness. My family loves them for Diwali every year.",
      image: "/images/review-1.jpg"
    },
    {
      name: "Rahul Verma",
      rating: 4,
      text: "As a health-conscious person, I appreciate how Aurum Delights combines tradition with nutrition. The Coconut Ladoo is my go-to snack!",
      image: "/images/review-2.jpg"
    },
    {
      name: "Anjali Mehta",
      rating: 5,
      text: "Gifted these to my in-laws and they were thrilled! The packaging is elegant and the ladoos stayed fresh for weeks. Highly recommended for gifting!",
      image: "/images/review-3.jpg"
    }
  ];

  // Mock data for blogs
  const blogs = [
    {
      title: "The Nutritional Power of Traditional Ladoos",
      summary: "Discover how these beloved sweets can actually boost your health when made with the right ingredients.",
      author: "Dr. Neha Gupta",
      date: "Mar 15, 2024",
      category: "Nutrition",
      readTime: "5 min read",
      url: "#"
    },
    {
      title: "5 Creative Ways to Serve Ladoos at Weddings",
      summary: "Move beyond the traditional plate and elevate your wedding dessert game with these innovative presentation ideas.",
      author: "Aarav Patel",
      date: "Feb 28, 2024",
      category: "Events",
      readTime: "4 min read",
      url: "#"
    },
    {
      title: "Preserving Sweetness: The Art of Gifting Ladoos",
      summary: "Learn why ladoos make the perfect gift and how Aurum Delights ensures your presents arrive in pristine condition.",
      author: "Sunita Reddy",
      date: "Jan 10, 2024",
      category: "Gifting",
      readTime: "3 min read",
      url: "#"
    }
  ];
  
  // Pre-calculate featured products on server with deterministic "randomization"
  const featured = (() => {
    if (allProducts.length === 0) return [];
    const arr = [...allProducts];
    // Use product IDs to create deterministic "shuffle" instead of Math.random()
    arr.sort((a, b) => {
      const aId = a._id?.slice(-3) || '0';
      const bId = b._id?.slice(-3) || '0';
      return parseInt(aId, 16) - parseInt(bId, 16);
    });
    return arr.slice(0, 6).map((p) => ({
      ...p,
      // Generate consistent pseudo-random values based on product ID
      displayRating: 4.2 + (parseInt(p._id?.slice(-2) || '0', 16) % 60) / 100,
      displayOriginalPrice: p.price + ((parseInt(p._id?.slice(-1) || '0', 16) * 13) % 200) + 50
    }));
  })();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-yellow-900 to-orange-950">
      {/* Animated Banner */}
      <AnimatedBanner 
        backgroundSrc="/images/10.png"
        logoSrc="/images/logo.png"
        headline="Aurum Delights" 
        subheadline="Premium Baked Goods Crafted with Passion & Tradition" 
      />

      {/* Main Content with Enhanced Chocolate Background */}
      <div className="relative">
        {/* Enhanced Chocolate Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/15 to-amber-800/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(139,69,19,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(160,82,45,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(245,158,11,0.05)_0deg,transparent_60deg,rgba(251,191,36,0.03)_120deg,transparent_180deg)] pointer-events-none" />
        
        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Pass data to client component */}
          <HomeClient 
            featured={JSON.parse(JSON.stringify(featured))} 
            reviews={JSON.parse(JSON.stringify(reviews))} 
            blogs={JSON.parse(JSON.stringify(blogs))} 
            allProducts={JSON.parse(JSON.stringify(allProducts))}
          />
        </div>
      </div>
    </div>
  );
}