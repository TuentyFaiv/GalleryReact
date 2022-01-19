import { CarouselFloatProps } from "../utils/types";
import { withContext } from "../hoc/withContext";
import Modal from "../components/Modal";
import Carousel from "./Carousel";

const CarouselFloat = (props: CarouselFloatProps): JSX.Element | null => {
  const { modalClassName, modalStyles, config, ...childrenProps } = props;

  const handleClose = () => { props.selectPhoto(null); };

  if (!props.activePhoto) return null;

  return (
    <Modal
      styles={modalStyles}
      className={modalClassName}
      onClose={handleClose}
    >
      <Carousel
        {...childrenProps}
        config={{
          ...props.config,
          modal: true
        }}
      />
    </Modal>
  );
};

export default withContext(CarouselFloat);
