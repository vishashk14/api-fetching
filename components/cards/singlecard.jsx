import React from "react";

const SingleCard = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Data is not there</p>;
  }
  console.log({ data });

  return (
    <React.Fragment>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto p-4 xl:px-0 gap-2">
        {data.map((i, index) => {
          return (
            <React.Fragment>
              <div className="overflow-hidden w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between">
                <a
                  href=""
                  className="h-[100%] flex justify-center items-center"
                >
                  <img
                    className="p-8 rounded-t-lg w-[45%] mx-auto"
                    src={i.image}
                    alt={i.title}
                  />
                </a>
                <div className="px-4 pb-4">
                  <a href="#">
                    <h5 className="text-base font-semibold tracking-tight line-clamp-1 text-gray-900">
                      {i.title}
                    </h5>
                  </a>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-base font-bold text-gray-900 ">
                      ${i.price}
                    </span>
                    <p>{i.rating.rate}</p>
                  </div>
                  <div className="">
                  <p className="text-left text-sm text-gray-900 line-clamp-3 mt-1">
                    {i.description}
                  </p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </React.Fragment>
  );
};
export default SingleCard;
