import MainBar from "./MainBar";


// eslint-disable-next-line react/prop-types
export default function WorkSpace() {
  return (
    <div className="flex flex-col w-full border-opacity-50 h-screen">
      
        <div className="grid h-40  m-1 justfy-end ">
          <MainBar />
        </div>
      </div>
   
  );
}
