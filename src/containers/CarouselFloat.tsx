import { CarouselFloatProps } from "../utils/types";
import { withContext } from "../hoc/withContext";
import Modal from "../components/Modal";
import Carousel from "./Carousel";

const CarouselFloat = (props: CarouselFloatProps): JSX.Element | null => {
  const handleClose = () => { props.selectPhoto(null); };

  if (!props.activePhoto) return null;

  return (
    <Modal
      styles={props.modalStyles}
      className={props.modalClassName}
      onClose={handleClose}
    >
      <Carousel
        className={props.className}
        styles={props.styles}
        config={{
          ...props.config,
          modal: true
        }}
      />
    </Modal>
  );
};

export default withContext(CarouselFloat);
