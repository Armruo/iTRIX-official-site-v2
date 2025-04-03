'use client'

import {
  Address,
  Connector,
  type ConnectorTriggerProps,
} from '@ant-design/web3';
import { Button, Popconfirm } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next'
import IndexBtn from '@/components/IndexBtn';

interface Props {
  style?: React.CSSProperties;
  size?: 'small';
}

const MyConnectButton: React.FC<ConnectorTriggerProps & Props> = ({
  size,
  style,
  onDisconnectClick,
  onConnectClick,
  loading,
  account,
}) => {

  const { t } = useTranslation()
  const connectText = t('common.wallet.connect'); 
  const disconnectSureText = t('common.wallet.disconnectSure'); 

  if (account && !loading) {
    return (
      <div style={{ position: 'relative' }}>
        <Popconfirm
          title={disconnectSureText}
          onConfirm={async () => {
            onDisconnectClick?.();
          }}
        >
          <Button 
            title={account?.address} 
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700" 
            shape="round"
          >
            {account?.name || <Address ellipsis address={account.address} />}
          </Button>
        </Popconfirm>
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', ...style }}>
      <IndexBtn
        height={size === 'small' ? '40px' : '52px'}
        fontSize={size === 'small' ? '16px' : '20px'}
        size={size}
        onClick={onConnectClick}
      >
        {loading
          ? t('common.wallet.connecting')
          : connectText}
      </IndexBtn>
    </div>
  );
};

const ConnectWallet: React.FC<Props> = ({ style, size }) => {
  return (
    <Connector
      modalProps={{
        // footer: (
        //   <>
        //     Powered by{' '}
        //     <a href="https://web3.ant.design/" target="_blank" rel="noreferrer">
        //       Ant Design Web3
        //     </a>
        //   </>
        // ),
      }}
    >
      <MyConnectButton style={style} size={size} />
    </Connector>
  );
};

export default ConnectWallet;
