const TestimonialCard = ({
  name,
  username,
  testimonial,
  profileImage,
  altText,
}) => {
  return (
    <article className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex-shrink-0">
          <img
            src={profileImage}
            alt={altText || "Profile image of the user"}
            className="w-12 h-12 object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-px max-w-[calc(100%-3rem)]">
          <span className="font-semibold text-lg text-justify text-neutral-900 truncate">
            {name || "John Doe"}
          </span>
          <span className="font-normal text-sm text-neutral-600 truncate">
            @{username || "johndoe"}
          </span>
        </div>
      </div>
      <span className="font-normal text-base text-neutral-600 max-w-full line-clamp-5 overflow-hidden">
        {testimonial || "This is a placeholder testimonial."}
      </span>
    </article>
  );
};

export default TestimonialCard;
