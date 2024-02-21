export default function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 text-xs md:text-base rounded-md text-stone-200 bg-indigo-700 hover:bg-indigo-600 hover:text-stone-100" {...props}>
      {children} 
    </button>
  );
}
