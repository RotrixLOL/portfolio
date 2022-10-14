export default {
    name: 'authorInfo',
    title: 'Author Info',
    type: 'document',
    fields: [{
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'array',
            of: [{
                name: 'Name',
                title: 'Name',
                type: 'string'
            }]
        },
        {
            name: 'favTech',
            title: 'Favourite Tech',
            type: 'array',
            of: [{
                name: 'name',
                title: 'Name',
                type: 'string',
                length: 3
            }]
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'number',
            title: 'Mobile Number',
            type: 'string'
        },
        {
            name: 'githubAccount',
            title: 'Github Identifier',
            type: 'string'
        },
        {
            name: 'twitterAccount',
            title: 'Twitter Identifier',
            type: 'string'
        },
        {
            name: 'instagramAccount',
            title: 'Instagram Identifier',
            type: 'string'
        }
    ]
}