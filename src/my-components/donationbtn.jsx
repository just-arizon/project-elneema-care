// DonationBtn.js
import React from 'react';
import { Button } from "@/components/ui/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Snippet } from "@nextui-org/react";

const DonationBtn = ({onOpen }) => {
  const { isOpen, onOpen: openModal, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        variant="solid"
        onClick={onOpen || openModal}  // Changed from onPress to onClick
        className={`bg-orange-400 hover:bg-orange-500 text-white rounded-full px-10 py-2`}
      >
        Donate
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Account Details</ModalHeader>
              <ModalBody>
                <p><span className="bold">Naira Account :</span> El-Neema cares initiative</p>
                <Snippet variant="flat" color="warning" hideCopyButton>Guaranty Trust Bank</Snippet>
                <Snippet>0826233968</Snippet>
                <p><span className="bold">USD Account :</span> El-Neema cares initiative</p>
                <Snippet>0837099221</Snippet>
              </ModalBody>
              <ModalFooter>Thanks for your Support</ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DonationBtn;
