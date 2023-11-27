export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-96 m-60">
      <p className=" font-subHeading text-3xl">Loading</p>
      <span className="m-10 text-primary loading loading-spinner loading-lg"></span>
    </div>
  );
};