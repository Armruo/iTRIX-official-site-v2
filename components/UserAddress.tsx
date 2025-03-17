'use client'

import { Address } from '@ant-design/web3'

export default function UserAddress({ address }: { address: string }) {
  return (
    <div className="mb-4">
      <Address address={address} />
    </div>
  )
}
