/* eslint-disable react/jsx-props-no-spreading */
import { useGalleryContext } from "../context/GalleryContext";
import { GalleryCtx, WithContext } from "../utils/types";

export function withContext<T extends WithContext = WithContext>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithContext = (props: Omit<T, keyof GalleryCtx>) => {
    const context = useGalleryContext();

    return (<WrappedComponent {...context} {...(props as T)} />);
  };

  ComponentWithContext.displayName = `withContext(${displayName})`;

  return ComponentWithContext;
}
