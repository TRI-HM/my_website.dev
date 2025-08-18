import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  onlyConfirm?: {
    status: boolean;
    buttonContent: string;
  };
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  onlyConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-4">{message}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            {onlyConfirm?.status ? onlyConfirm.buttonContent : "Yes"}
          </button>
          {onlyConfirm?.status ? null : (
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              No
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
