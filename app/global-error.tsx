'use client';
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
      <div className='h-screen bg-black text-white flex justify-center items-center flex-col gap-8'>
      <h2>Something went wrong!</h2>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
      </body>
    </html>
  );
}