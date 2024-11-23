import React, { useEffect, useState } from 'react';

const Review = ({ userreviews = [] }) => {
  const [duplicatedReviews, setDuplicatedReviews] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Duplicate reviews to create seamless loop
    setDuplicatedReviews([...userreviews, ...userreviews]);

    // Add responsive check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [userreviews]);

  const ReviewCard = ({ review, index }) => (
    <div
      key={index}
      className="flex-shrink-0 w-full sm:w-96 mx-2 sm:mx-4 transform transition-all duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 h-full border border-orange-100 hover:shadow-2xl">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
            {review.name.charAt(0)}
          </div>
          <div className="ml-3 sm:ml-4">
            <h3 className="font-semibold text-base sm:text-lg text-gray-800">
              {review.name}
            </h3>
            <div className="flex text-orange-400 text-sm sm:text-base">
              {"★".repeat(5)}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-4 sm:line-clamp-none">
          {review.review}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-fit w-full bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-orange-800">
          What Our Customers Say
        </h1>
        
        {/* Mobile View - Single Column Scrolling */}
        {isMobile ? (
          <div className="space-y-4">
            {userreviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        ) : (
          // Desktop View - Animated Rows
          <>
            {/* First Row - Left to Right */}
            <div className="relative overflow-hidden mb-8 -mx-4">
              <div className="animate-scroll-left flex">
                {duplicatedReviews.map((review, index) => (
                  <ReviewCard key={`row1-${index}`} review={review} />
                ))}
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative overflow-hidden -mx-4">
              <div className="animate-scroll-right flex">
                {duplicatedReviews.reverse().map((review, index) => (
                  <ReviewCard key={`row2-${index}`} review={review} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;