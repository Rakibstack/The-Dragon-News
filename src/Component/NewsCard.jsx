import { FaShareAlt, FaBookmark, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl  rounded-2xl overflow-hidden">
      {/* Author Info */}
      <div className="flex justify-between items-center p-4  bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600 text-lg">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure className="p-4 ">
        <img src={thumbnail_url} alt={title} className="w-full h-72 rounded-lg  object-cover" />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">
          {details.slice(0, 200)}...
          <span className="text-primary cursor-pointer font-medium">
            Read More
          </span>
        </p>

        <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline text-xs font-medium px-2 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3 border-t mt-3">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-gray-700 font-semibold">
              {rating.number}.0
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
