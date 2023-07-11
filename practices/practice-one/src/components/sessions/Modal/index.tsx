import { Button } from '@components/common/Button/index';
import { ReactNode, memo } from 'react';

// Define the props for the Modal component
interface ModalProps {
  onCloseModal: () => void;
  showModal: boolean;
  onToggleThemeModal: () => void;
  isThemeModal: boolean;
  title: string;
  children: ReactNode;
}
/**
 * Primary UI component for user interaction
 */
export const Modal = memo(
  ({ onCloseModal, showModal, onToggleThemeModal, isThemeModal, title, children }: ModalProps) => {
    return showModal ? (
      <>
        <div className="modal-overlay" onClick={onCloseModal}></div>
        <div className={`${isThemeModal ? 'modal' : 'modal dark-theme'}`}>
          <div className="modal-container">
            {/* Modal header */}
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              {/* Close button */}
              <Button className="btn btn-close-modal" onClick={onCloseModal} />
            </div>
            {/* Modal content */}
            {children}
            {/* Modal footer */}
            <div className="modal-footer">
              <div className="modal-escape">
                <span className="modal-escape-btn">ESC</span>
                <span className="modal-escape-text">To Escape</span>
              </div>
              <Button
                className={`${
                  isThemeModal ? 'btn btn-sunshine-modal' : 'btn btn-sunshine-modal dark'
                }`}
                onClick={onToggleThemeModal}
              />
            </div>
          </div>
        </div>
      </>
    ) : null;
  }
);
