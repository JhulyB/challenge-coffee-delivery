import { Fragment, ReactNode } from "react"

interface IGenericListProps<T>{
    data: T[]
    keyExtractor: (item: T) => string | number
    renderItem: (item: T) => ReactNode
}

export const GenericList = <T,>({ data, keyExtractor, renderItem }: IGenericListProps<T>) => {
    return(
        <>
            {
                data.map((item) => (
                    <Fragment key={keyExtractor(item)}>
                        {renderItem(item)}
                    </Fragment>
                ))
            }
        </>
    )
}