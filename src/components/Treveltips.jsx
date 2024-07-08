import React from 'react';

const blogPosts = [
  {
    date: 'October 18, 2018',
    author: 'Alisea Micheal',
    title: 'MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam',
    imageUrl: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-01.jpg',
  },
  {
    date: 'October 18, 2018',
    author: 'Alisea Micheal',
    title: 'MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam',
    imageUrl: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-02.jpg',
  },
];

const BlogPost = ({ post, isEven }) => (
  <>
  <div className={`py-5 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col md:flex-row gap-6 md:gap-14 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
    <img src={post.imageUrl} className="w-full md:w-1/2 h-[200px] md:h-[350px] object-cover" alt={post.title} />
    <div className="w-full md:w-1/2">
      <div className="flex gap-4 mb-2">
        <span className="text-lg md:text-base italic flex gap-1 items-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 10H3M21 12.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12M16 2V6M8 2V6M14.5 19L16.5 21L21 16.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {post.date}
        </span>
        <span className="text-lg md:text-base italic flex gap-1 items-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 2L22 6M2 22L3.2764 17.3199C3.35968 17.0145 3.40131 16.8619 3.46523 16.7195C3.52199 16.5931 3.59172 16.4729 3.67332 16.3609C3.76521 16.2348 3.87711 16.1229 4.1009 15.8991L14.4343 5.56569C14.6323 5.36768 14.7313 5.26867 14.8455 5.23158C14.9459 5.19895 15.0541 5.19895 15.1545 5.23158C15.2687 5.26867 15.3677 5.36768 15.5657 5.56569L18.4343 8.43431C18.6323 8.63232 18.7313 8.73133 18.7684 8.84549C18.8011 8.94591 18.8011 9.05409 18.7684 9.15451C18.7313 9.26867 18.6323 9.36768 18.4343 9.56569L8.1009 19.8991C7.87711 20.1229 7.76521 20.2348 7.63908 20.3267C7.52709 20.4083 7.40692 20.478 7.28052 20.5348C7.13815 20.5987 6.98548 20.6403 6.68014 20.7236L2 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          by {post.author}
        </span>
      </div>
      <h1 className="text-xl md:text-2xl font-bold hover:underline cursor-pointer">{post.title}</h1>
      <p className="text-base mt-2">{post.description}</p>
      <button className="mt-4 px-4 py-3 text-lg font-bold bg-[#59815b] hover:bg-[#496d4b] text-white relative overflow-hidden group flex items-center gap-1">
        <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-10">READ MORE</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="absolute left-full top-1/2 transform -translate-y-1/2 translate-x-2  transition-transform duration-300 group-hover:left-auto group-hover:right-2 group-hover:-translate-x-10 group-hover:rotate-0 group-hover:delay-300"
        >
          <path
            d="M22.707,12.707a1,1,0,0,0,0-1.414l-5-5a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-3.293,3.293a1,1,0,0,0,1.414,1.414Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
  </>
);

const Blog = () => (
  <div
      style={{
        backgroundImage: `url("https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-bckg-02.jpg?id=102")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height:"160vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <div className=' flex flex-col justify-center items-center mt-5 mb-5 '>
  <p className='text-[#878787] text-base italic'>Lorem, ipsum dolor.</p>
  <h1 className=' text-5xl font-bold'>TRAVEL ESSENTIALS <span className=' text-[#59815b] bg-[#F2F1E7]'>TIPS</span></h1>
 </div>
    {blogPosts.map((post, index) => (
      <BlogPost post={post} key={index} isEven={index % 2 === 1} />
    ))}
  </div>
);

export default Blog;
        