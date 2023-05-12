'use client'

interface ContainerProp{
    children: React.ReactNode
};

const Container : React.FC<ContainerProp> = ({
    children
}) => {
  return (
    <div className="max-w-[2250px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        {children}
    </div>
  )
}

export default Container