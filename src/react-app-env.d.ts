/// <reference types="react-scripts" />

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
