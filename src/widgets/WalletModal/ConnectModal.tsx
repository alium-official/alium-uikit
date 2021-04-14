import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  title?: string,
  footer?: string
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, title='Connect to a wallet', footer='Learn how to connect' }) => (
  <Modal title={title} onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    <HelpLink
      href="https://aliumswap.medium.com/how-to-set-up-a-wallet-to-use-alium-finance-cca9fa7cb8b0"
      external
    >
      <HelpIcon color="primary" mr="6px" />
      {footer}
    </HelpLink>
  </Modal>
);

export default ConnectModal;
