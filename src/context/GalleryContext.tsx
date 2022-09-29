import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { DoubleLinkedList } from "../common/structures";

import type { Node } from "../common/structures";
import type { GalleryCtx, GalleyCtxProps } from "../common/typing/contexts";
import type { Photo } from "../common/typing/types";

const GalleryContext = createContext<GalleryCtx>({
  photos: null,
  activePhoto: null,
  selectPhoto: () => {}
});

const GalleryProvider = ({ children, photos }: GalleyCtxProps) => {
  const [activePhoto, setActivePhoto] = useState<Node<Photo> | null>(null);
  const photosCtx = useMemo(() => new DoubleLinkedList(photos), [photos]);

  const handleSelectPhoto = useCallback((node: Node<Photo> | null, id?: number) => {
    let nodeSelected: Node<Photo> | null;
    if (id) {
      nodeSelected = photosCtx.findItem(id);
    } else {
      nodeSelected = node;
    }
    setActivePhoto(nodeSelected);
  }, [photosCtx]);

  const valueCtx = useMemo(() => ({
    photos: photosCtx,
    activePhoto,
    selectPhoto: handleSelectPhoto
  }), [activePhoto, photosCtx, handleSelectPhoto]);

  return (
    <GalleryContext.Provider value={valueCtx}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;

export const useGalleryContext = () => useContext(GalleryContext);
