//  relative overflow-hidden

import React from "react";
import Button from "../../components/base/Button";
import { Star,  SlidersHorizontal } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CommunityReviews: React.FC = () => {
  useGSAP(() => {
    gsap.to("#comment", {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.45,
      scrollTrigger: {
        trigger: "#comment",
        toggleActions: "restart  none none reverse",
      },
      ease: "power2.inOut",
    });
  }, []);

  // Sample reviews data
  const reviews = [
    {
      author: "Riku Sayuj",
      rating: 4,
      date: "January 27, 2021",
      content:
        'Pithy book. Here"s some for you:\n\n1. People act from their experiences. Don"t judge from yours.',
      likes: 1916,
      comments: 15,
      tags: ["finance", "investing", "psychology"],
    },
    {
      author: "Riku Sayuj",
      rating: 4,
      date: "January 27, 2021",
      content:
        'Pithy book. Here"s some for you:\n\n1. People act from their experiences. Don"t judge from yours.',
      likes: 1916,
      comments: 15,
      tags: ["finance", "investing", "psychology"],
    },
    {
      author: "Riku Sayuj",
      rating: 4,
      date: "January 27, 2021",
      content:
        'Pithy book. Here"s some for you:\n\n1. People act from their experiences. Don"t judge from yours.',
      likes: 1916,
      comments: 15,
      tags: ["finance", "investing", "psychology"],
    },
    {
      author: "Riku Sayuj",
      rating: 4,
      date: "January 27, 2021",
      content:
        'Pithy book. Here"s some for you:\n\n1. People act from their experiences. Don"t judge from yours.',
      likes: 1916,
      comments: 15,
      tags: ["finance", "investing", "psychology"],
    },
  ];

  // Ratings data
  const ratings = [
    { stars: 5, count: 107272, percentage: 49 },
    { stars: 4, count: 73941, percentage: 34 },
    { stars: 3, count: 29369, percentage: 13 },
    { stars: 2, count: 4514, percentage: 2 },
    { stars: 1, count: 1506, percentage: 1 },
  ];

  return (
    <div className="xl:h-screen  md:h-[70vh] overflow-hidden   bg-gradient-to-b from-gray-900 to-gray-800  px-4 text-white   ">
      {/* Title */}
      <div className="p-3  xl:py-16 ">
        <h1 className="text-4xl font-bold text-center" >Community <span className="text-[#2a4dc1]">Reviews</span></h1>

        <div className="flex justify-between flex-col xl:flex-row ">
          {/* Overall Rating */}
          <div className=" flex flex-col justify-start  gap-10 xl:mt-20  mt-6  xl:w-[40%] ">
            <div className=" items-center space-x-2 flex justify-center ">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`md:w-8 md:h-8 ${
                    i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="md:text-4xl text-lg font-bold">4.30</span>
              <span className="text-gray-500 text-xs xl:flex xl:text-sm md:text-lg md:pl-5 xl:gap-2 xl:p-2">
                <span className="hidden xl:block">216,615 ratings ·</span> 14,681 reviews
              </span>
            </div>

            {/* Rating Bars */}
            <div className="w-full flex space-y-2  flex-col ">
              {ratings.map((rating) => (
                <div key={rating.stars} className="flex items-center">
                  <span className="xl:w-16">{rating.stars} stars</span>
                  <div className="flex-grow bg-[#6B7280] rounded-full h-2.5 mx-2">
                    <div
                      className="bg-yellow-400 h-2.5 rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="xl:w-32 xl:flex xl:gap-2  xl:text-lg text-right text-gray-500 text-sm">
                    {rating.count} <span className="hidden xl:block">({rating.percentage}%)</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-16    xl:h-full ">
            <div className=" w-full flex items-center gap-4">
              <input
                type="text"
                placeholder="Search review text"
                className="border bg-[#17202E] md:py-5  xl:py-2 placeholder:md:text-2xl placeholder:xl:text-lg  p-2 rounded-full w-full px-3 outline-none md:w-3/4 xl:w-full"
              />
              <Button
                label="Filter"
                startIcon={<SlidersHorizontal size={15} />}
                className="flex justify-center items-center md:py-5 md:px-10 xl:py-2 xl:px-4 px-4 md:text-2xl xl:text-lg  py-2 rounded-full bg-[#2a4dc1] gap-3 tracking-wide"
              />
            </div>

            {/* Review List */}
            <div className=" w-full flex flex-col gap-5 mt-5  md:h-[40vh] xl:h-[70vh] overflow-hidden  overflow-y-scroll no-scrollbar  h-[60vh]">
              {reviews.map((review, index) => (
                <div
                  id="comment"
                  key={index}
                  className="flex flex-col gap-3 border-b border-[#1f2a3d] p-4 opacity-0 -translate-x-10"
                >
                  {/* Reviewer Info */}
                  <div className="flex gap-2 justify-start items-center ">
                    <img
                      src={`https://i.pravatar.cc/50?img=${index + 1}`}
                      alt="avatar"
                      className="xl:w-12 xl:h-12 md:w-24 md:h-24 w-14 h-14 rounded-full mr-4"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-bold xl:text-xl xl:font-normal md:text-2xl">{review.author}</div>

                      <div className="flex  xl:gap-3 gap-1    flex-col xl:flex-row xl:justify-center xl:items-center justify-between">
                        <div className=" gap-1 flex justify-center items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`xl:w-4 xl:h-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <h1 className=" ml-2 text-xs xl:text-sm text-gray-500 text-start md:text-xl ">{review.date}</h1>
                      </div>
                    </div>
                  </div>
                  {/* Review Rating */}
                  {/* Review Text */}
                  <p className="xl:text-lg text-sm md:text-xl font-medium xl:font-normal">{review.content}</p>
                  <div className="flex xl:items-center  gap-2 space-x-4 text-xs flex-col xl:flex-row xl:text-base text-gray-500 ">
                    <div className="flex justify-start gap-2 md:text-xl xl:text-base">
                    <span>{review.likes} likes</span>
                    <span>{review.comments} comments</span>
                    </div>
                    <div className="flex space-x-2 ">
                      {review.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#6B7280] text-sm md:text-xl md:px-5 xl:text-base xl:px-2  text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityReviews;
