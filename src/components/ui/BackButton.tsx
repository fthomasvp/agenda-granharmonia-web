import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type BackButtonProps = {
  label?: string;
  path: string;
};

export default function BackButton({ label = "back", path }: BackButtonProps) {
  const { t } = useTranslation(["common"]);
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      leftIcon={<FaArrowLeft />}
      onClick={() => navigate(path)}
    >
      {t(label)}
    </Button>
  );
}
