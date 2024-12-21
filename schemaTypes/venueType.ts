import { defineField, defineType } from "sanity";


export const venueType = defineType({
    name: 'venue',
    title: 'Venue',
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
            type: 'slug',
            options: {source: 'name'},
            //hide the field until certain condition is true
            hidden: ({document}) => !document?.name,
        }),
        defineField({
            name: 'venueType',
            type: 'string',
            options:{
                list:[
                    {title: 'Stadium', value:'stadium'},
                    {title: 'Amphitheater', value:'amphitheater'},
                    {title: 'Club', value:'Club'},
                    {title: 'Outdoor', value: 'outdoor'}
                ],
                layout: 'dropdown'
            }
        }),
        defineField({
            name: 'location',
            type: 'geopoint'
        }),
        defineField({
            name: 'capacity',
            type: 'number'
        }),
        defineField({
            name: 'contactNumber',
            type: 'number'
        }),
        defineField({
            name: 'operatingHours',
            type: 'string'
        })
    ]
})