import { useApiData } from "../Utils/Context";
import { AppContextType, PhotosEntity } from "../interface/interface";

const Home: React.FC = () => {
  const { photo, removepost } = useApiData() as AppContextType;
  console.log(photo);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 object-contain py-20">
        {photo.map((item: PhotosEntity) => {
          const { alt, url, src, photographer, id } = item;
          return (
            <div
              key={id}
              className="border-sky-700 border-2 p-3 rounded-3xl flex flex-col justify-between"
            >
              <a href={url}>
                <img
                  src={src.original}
                  alt={alt}
                  className="w-full h-56 rounded-3xl"
                />
              </a>
              <p className="font-mono pt-5 text-center ">
                Clicked by <strong>{photographer}</strong>
              </p>

              <div className="buttons flex items-center justify-between pt-3 px-3">
                <a href={url}>
                  <span className="veiwmore">View</span>
                </a>
                <span className="veiwmore" onClick={() => removepost(id)}>
                  NotINt
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
