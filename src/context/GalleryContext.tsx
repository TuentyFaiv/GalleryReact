import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { DoubleLinkedList, Node } from "../utils/structures";
import { GalleryCtx, GalleyCtxProps } from "../utils/types";

const GalleryContext = createContext<GalleryCtx>({
  photos: null,
  activePhoto: null,
  selectPhoto: () => {}
});

const GalleryProvider = ({ children, photos }: GalleyCtxProps): JSX.Element => {
  const [activePhoto, setActivePhoto] = useState<Node | null>(null);
  const photosCtx = useMemo(() => new DoubleLinkedList(photos), [photos]);

  const handleSelectPhoto = useCallback((node: Node | null, id?: number) => {
    let nodeSelected: Node | null;
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
