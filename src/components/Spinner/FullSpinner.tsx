interface FullSpinnerProps {}

export function FullSpinner({}: FullSpinnerProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
