export const Toolbar = () => {
  return (
    <div className="absolute top-[400px] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
      </div>
      <div>
        <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
          <div>Color</div>
          <div>Size</div>
        </div>
      </div>
    </div>
  );
};
