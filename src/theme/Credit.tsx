import constants from "/src/constants"
import Link from "@docusaurus/Link";
import React from 'react';

export default React.memo(function Credit(props: {id: string}) {
    return (
        <Link href={`/credits#${props.id}`}>{constants.contributors[props.id]}</Link>
    )
})