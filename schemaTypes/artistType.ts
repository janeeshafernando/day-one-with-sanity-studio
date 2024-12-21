import { defineField, defineType } from "sanity";


export const artistType = defineType({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields:[
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug'
        }),
        defineField({
            name: 'category',
            type: 'string',
            options:{
                list: [
                    {title: 'Solo Singer', value: 'solo-singer'},
                    {title: 'Band', value: 'band'}
                ]
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
                ]
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