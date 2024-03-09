import React, { type PropsWithChildren } from 'react'

type TagProps = {
    color: string;
    textColor: string;
} & PropsWithChildren

const Tag = (props: TagProps) => {
    return (
        <div>Tag</div>
    )
}

export default Tag;