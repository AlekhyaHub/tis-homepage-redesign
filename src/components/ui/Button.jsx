const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-black text-white hover:bg-ink-soft",
  outline: "border-2 border-white text-white hover:bg-white hover:text-brand",
};

function Button({ href, variant = "primary", children, ...props }) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors duration-200 ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;