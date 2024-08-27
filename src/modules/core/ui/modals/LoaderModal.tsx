import { Dialog, DialogPanel } from "@headlessui/react";

import type { ModalProps } from "@/modules/core/types";
import SpinnerLoader from "@/modules/core/ui/loaders/SpinnerLoader";

const LoaderModal: React.FC<ModalProps> = ({ isOpen, close }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center z-20 justify-center p-4 bg-black bg-opacity-35">
          <DialogPanel
            transition
            className="w-full flex max-w-md rounded-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 z-30 justify-center items-center"
          >
            <SpinnerLoader />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default LoaderModal;
