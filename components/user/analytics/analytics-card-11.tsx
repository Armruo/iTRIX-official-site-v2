import Image from 'next/image'
import Link from 'next/link'
import SolanaLogo from '@/public/images/solana-sol-logo.svg'

export default function AnalyticsCard11() {
  const formatSignature = (signature: string) => {
    if (signature.length <= 20) return signature;
    return `${signature.slice(0, 10)}...${signature.slice(-10)}`;
  };

  const getSolscanTxUrl = (signature: string) => {
    return `https://solscan.io/tx/${signature}`;
  };

  const getSolscanAccountUrl = (account: string) => {
    return `https://solscan.io/account/${account}`;
  };

  return(
    <div className="col-span-full bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Transactions</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Signature</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Block</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Time</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Instructions</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">By</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Value (ITX)</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Fee (SOL)</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Programs</div>
                </th>
                
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {[
                { 
                  signature: '38tUpshnvs4WYFFctBosz3y2s9Zb8Zp6gehcUsRvZdBYRNwfJqu6JR5FRKqPLaxbbtn67owb7F6ApkA7Vj2FhBZU', 
                  block: '327320932',
                  time: '1 mins ago',
                  instructions: 'transfer',
                  by: 'FYr3XGX9XaUY47ocRSzyVRAWh2oGmf43eaabNmfAXK23',
                  value: '100',
                  fee: '0.000005',
                  programs: '' 
                },
                { 
                  signature: '5zzYDZuyVPVqF1MHRhkb73jd4FGCCuER7qvQfkcYDZatcGGtaoKH5YJK6g7eqHRrUaj8yoZBvmLssBUHd6saQAtJ', 
                  block: '327320834',
                  time: '17 mins ago',
                  instructions: 'transfer',
                  by: 'GFYcjFjy3QKafqNPzMLfQcx6Qy9cXUkVkgsTxjMkBjGX',
                  value: '72',
                  fee: '0.000005',
                  programs: '' 
                },
                { 
                  signature: 'GcXmch5gtjULw42VrS8EbN2UiYTWWBmtAR9efsaHFvskAf3KbJDYGgDEns1rNfH8thVUpA7vi3CYJrucNs33HwM', 
                  block: '327320774',
                  time: '52 mins ago',
                  instructions: 'transfer',
                  by: '3pjWyeFUPa9Sppf15BAJYim4K2kVZThbLbYzThhLUBbG',
                  value: '800',
                  fee: '0.000005',
                  programs: '' 
                },
                { 
                  signature: '4UJUYBLHv5MhzRMWkfApSKMkEwZzswoqX1Jrp5m4D1N7tVuXTExupjcjvG1UDRsiNwzumqJPeAU3VwgcFPFrXSoY', 
                  block: '327320680',
                  time: '1 hour ago',
                  instructions: 'transfer',
                  by: 'G66mHNa4QWSYakanWK4S3GtEYq9rpfk6r7vDh9BNmNpY',
                  value: '530',
                  fee: '0.000005',
                  programs: '' 
                },
                { 
                  signature: 'CmUzjdfkz4uQ7iWo6pUCA95Lh3fJJefVRrFu8q2J2zKLhj3KAbqcyMYM4fzAyhGvfZhYcjQZqxNVv7wipBBGWVe', 
                  block: '327320482',
                  time: '5 days ago',
                  instructions: 'transfer',
                  by: 'fM21zMk5aCjRNrha5gkmCgKTmXxgKoiBCHBSf1Cc1iX',
                  value: '200',
                  fee: '0.000005',
                  programs: '' 
                },
              ].map((stat, index) => (  
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">
                      <Link 
                        href={getSolscanTxUrl(stat.signature)}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-700 hover:underline"
                      >
                        {formatSignature(stat.signature)}
                      </Link>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">{stat.block}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">{stat.time}</div>
                  </td>

                  {/* <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <svg className="fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
                      </svg>
                      <div>{stat.instructions}</div>
                    </div>
                  </td> */}

                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="shrink-0 rounded-full mr-2 sm:mr-3 bg-violet-500">
                        <svg className="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                          <path d="M24.446 19.335a2.5 2.5 0 00-3.522 3.194c-.845.63-1.87.97-2.924.971a4.979 4.979 0 01-1.113-.135 4.436 4.436 0 01-1.343 1.682 6.91 6.91 0 006.9-1.165 2.5 2.5 0 002-4.547h.002zM20.431 11.938a2.5 2.5 0 10-.4 2.014 5.027 5.027 0 012.723 3.078c.148-.018.297-.028.446-.03a4.5 4.5 0 011.7.334 7.023 7.023 0 00-4.469-5.396zM14.969 20.25a2.49 2.49 0 00-1.932-1.234A4.624 4.624 0 0113 18.5a4.97 4.97 0 011.348-3.391 4.456 4.456 0 01-.788-2.016A6.989 6.989 0 0011 18.5c.003.391.04.781.11 1.166a2.5 2.5 0 103.859.584z" />
                        </svg>
                      </div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">{stat.instructions}</div>
                    </div>
                  </td>

                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">
                    <Link 
                        href={getSolscanAccountUrl(stat.by)}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-700 hover:underline"
                      >
                        {formatSignature(stat.signature)}
                      </Link>
                    </div>
                  </td>

                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-600">{stat.value}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">{stat.fee}</div>
                  </td>

                  
                  
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex shrink-0 -space-x-3 -ml-px">
                      <div className="flex gap-1 flex-row items-center justify-start flex-wrap">
                        <Link href="/account/swapFpHZwjELNnjvThjajtiVmkz3yPQEHjLtka2fwHW">
                          <div className="" data-state="closed">
                            <div className="flex align-middle" style={{ minWidth: '20px', maxWidth: '20px', height: '20px', position: 'relative' }}>
                              <Image
                                src={SolanaLogo}
                                alt="Solana Logo"
                                width={20}
                                height={20}
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  objectFit: 'contain',
                                  left: 0
                                }}
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </td>

                  
                  
                </tr>
              ))}
              {/* Row */}
              
              
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
