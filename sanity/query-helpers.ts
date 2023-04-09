export const linkFields = `
    ...,
    !external => {
        page->{slug, title}
    }
`

export const navigationFields = `
    ...,
    linkItems[] {
        ...,
        link { ${linkFields} },
        childLinks[] { ${linkFields} }
    }
`
