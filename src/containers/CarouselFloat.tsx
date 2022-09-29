import { withContext } from "../hoc";

import type { CarouselFloatProps } from "../common/typing/proptypes";

import { Modal } from "../components";
// eslint-disable-next-line import/no-useless-path-segments
import { Carousel } from "../containers";

const CarouselFloat = (props: CarouselFloatProps) => {
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
