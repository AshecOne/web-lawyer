"use client";
import * as React from 'react';
import { getBlogPosts } from '@/utils/contentful';

interface IBlogPost {
  image: {
    fields: {
      file: {
        url: string;
        details: {
          image: {
            width: number;
            height: number;
          };
        };
      };
    };
  };
  title: string;
  date: string;
  description: string;
  author: string;
  link: string;
}

const CardArticle: React.FunctionComponent = () => {
  const [blogPosts, setBlogPosts] = React.useState<IBlogPost[]>([]);

  React.useEffect(() => {
    getOtherArticle();
  }, []);

  const getOtherArticle = async () => {
    try {
      const response = await getBlogPosts();
      const shuffledPosts = shuffleArray(response as IBlogPost[]);
      setBlogPosts(shuffledPosts.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  const shuffleArray = (array: IBlogPost[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <div className="bg-[#092415] text-white p-6">
      <h2 className="text-2xl font-bold mb-4">{`What's New`}</h2>
      <div className="flex overflow-x-auto space-x-4 md:flex-col md:space-x-0">
        {blogPosts.map((blog, index) => (
          <div key={index} className="bg-[#166432] flex-none w-80 rounded-lg overflow-hidden md:px-6 md:w-auto md:mb-6 md:flex md:items-center">
            <img
              src={blog.image.fields.file.url}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-lg md:w-64 md:h-64 md:rounded-t-none md:rounded-l-lg md:mr-6"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-300 mb-2">
                {new Date(blog.date).toLocaleDateString()}
              </p>
              <p className="text-gray-200 mb-4 line-clamp-3 md:line-clamp-none">{blog.description}</p>
              <p className="text-sm text-gray-300 mb-4">By {blog.author}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardArticle;