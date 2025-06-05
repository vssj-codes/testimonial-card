// src/components/TestimonialCard.jsx
import React from "react";

const TestimonialCard = ({
  name,
  username,
  testimonial,
  profileImage,
  altText,
}) => {
  return (
    <div className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg">
      <div className="flex items-center gap-4 self-stretch">
        <div className="w-12 h-12">
          <img
            src={profileImage || "https://via.placeholder.com/100"}
            alt={altText || "Profile Image"}
            className="w-12 h-12 object-cover"
          />
        </div>
        <div className="flex flex-col gap-px grow">
          <span className="font-semibold text-lg text-justify text-neutral-900 truncate max-w-full overflow-hidden">
            {name || "John Doe"}
          </span>
          <span className="font-normal text-sm text-neutral-600 truncate">
            @{username || "johndoe"}
          </span>
        </div>
      </div>
      {/* truncate */}
      <span className="font-normal text-base text-neutral-600">
        {testimonial || "This is a placeholder testimonial."}
      </span>
    </div>
  );
};

export default TestimonialCard;
