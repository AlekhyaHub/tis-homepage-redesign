function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white dark:bg-neutral-800 p-6 shadow-md transition-shadow duration-300 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;