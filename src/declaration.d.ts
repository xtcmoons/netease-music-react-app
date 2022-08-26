declare module '*.less' {
  const classes: { [className: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: string;
  export default value;
}
