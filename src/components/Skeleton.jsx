export default function Skeleton() {
  const skeletonStyle = {
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    margin: '5px',
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div style={{ ...skeletonStyle, height: '20px', width: '60%' }}></div>
      <div style={{ ...skeletonStyle, height: '20px', width: '60%' }}></div>
      <div style={{ ...skeletonStyle, height: '20px', width: '60%' }}></div>
    </div>
  );
}