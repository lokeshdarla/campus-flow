import React, { ReactNode } from 'react'

interface InfoBlockProps {
  label?: string
  value: string | number | JSX.Element | ReactNode | null | undefined
  borderRequired?: boolean
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  label,
  value,
  borderRequired = true,
}) => {
  const renderValueComponent = () => {
    if (typeof value === 'string' || typeof value === 'number') {
      return (
        <span className="text-base font-medium text-gray-600 antialiased">
          {value ?? '-'}
        </span>
      )
    } else {
      return value
    }
  }

  return (
    <div className="h-full w-full">
      <div className="font-inter flex cursor-pointer flex-col items-start rounded-md px-2 py-3 hover:bg-gray-50">
        {label && (
          <span className="w-full text-xs font-medium text-gray-500 antialiased">
            {label}
          </span>
        )}
        <div className="flex w-full items-center justify-between">
          {renderValueComponent()}
        </div>
      </div>
      {borderRequired && <div className="h-0.5 w-full bg-gray-100"></div>}
    </div>
  )
}
