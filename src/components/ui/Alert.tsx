import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

type AlertProps = {
  isOpen: boolean;
  onCancel: () => void;
  onOk: () => void;
  header: string;
  body: string;
  okText: string;
  cancelText: string;
};

export default function Alert({
  isOpen,
  onCancel,
  onOk,
  header,
  body,
  okText,
  cancelText,
}: AlertProps) {
  const cancelRef = useRef(null);

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onCancel}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{header}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{body}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCancel}>
              {cancelText}
            </Button>
            <Button
              ml={3}
              onClick={onOk}
              bgColor="blue.600"
              color="whiteAlpha.900"
              _hover={{
                bgColor: "blue.500",
              }}
            >
              {okText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
