import { defineField, defineType } from "sanity";

export const artistType = defineType({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    groups:[
        {name: 'details', title: 'Details'},
        {name: 'editorial', title: 'Editorial'}
    ],
    fields:[
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'name',
            type: 'string',
            group: ['details', 'editorial']
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            //generate the slug field value
            options: {source: 'name'},
            //validation - required
            validation: (rule) => rule.required().error("This field is required.")
        }),
        defineField({
            name: 'category',
            type: 'string',
            options:{
                list: [
                    {title: 'Solo Singer', value: 'solo-singer'},
                    {title: 'Band', value: 'band'}
                ],
                //https://www.sanity.io/docs/previews-list-views#dbe115bb1388
                layout: 'dropdown'
            }
        }),
        defineField({
            name: 'genres',
            type: 'string',
            options:{
                list:[
                    {title: 'Pop', value: 'pop'},
                    {title: 'Indie Pop', value: 'indie-pop'},
                    {title: 'Reggae Fusion', value: 'reggae-fusion'},
                    {title: 'Electronic', value: 'electronic'}
                ],
                layout: 'dropdown'
            }
        }),
        defineField({
            name: 'email',
            type:'string'
        }),
        defineField({
            name: 'contactNumber',
            type: 'number'
        }),
        defineField({
            name: 'website',
            type: 'url'
        }),     
    ]
})