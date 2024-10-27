const Category = ({ title, urlToImg, description, index }) => {
  return (
    <div className="flex justify-between shadow-lg my-3">
      {index % 2 === 0 ? (
        <>
          <div className="w-1/2 bg-gray-200 p-4 h-auto">
            <div className="font-bold">{title}</div>
            <img src={urlToImg} alt={title} />
          </div>
          <div className="w-1/2 bg-gray-300 p-4 h-auto">
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 bg-gray-300 p-4 h-auto">
            <p>{description}</p>
          </div>
          <div className="w-1/2 bg-gray-200 p-4 h-auto">
            <div className="font-bold">{title}</div>
            <img src={urlToImg} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
