// eslint-disable-next-line import/order
import { useGalleryContext } from "../context";

// eslint-disable-next-line import/order
import type { ComponentType } from "react";
import type { GalleryCtx, WithContext as HOC } from "../common/typing/contexts";

function withContext<T extends HOC = HOC>(Component: ComponentType<T>) {
  const displayName = Component.displayName || Component.name || "Component";

  const WithContext = (props: Omit<T, keyof GalleryCtx>) => {
    const context = useGalleryContext();

    return (<Component {...context} {...(props as T)} />);
  };

  WithContext.displayName = `withContext(${displayName})`;

  return WithContext;
}

export default withContext;
