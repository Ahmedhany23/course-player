import React from "react";
import { Modal } from "antd";

interface PdfModalProps {
  open: boolean;
  src: string;
  onClose: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ open, src, onClose }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width="80%"
      centered
      destroyOnHidden
      title="PDF Viewer"
    >
      <iframe
        src={src}
        title="PDF Document"
        style={{
          width: "100%",
          height: "80vh",
          border: "none",
        }}
        aria-label="Embedded PDF"
      />
    </Modal>
  );
};

export default PdfModal;
