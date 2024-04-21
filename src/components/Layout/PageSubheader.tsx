export const PageSubHeader = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className="flex h-12 items-center sticky justify-between border-b border-gray-200 bg-white px-3 md:px-6">
      <h4 className=" font-sans text-lg font-semibold tracking-normal text-blue-700">
        {pageTitle}
      </h4>
    </div>
  )
}
