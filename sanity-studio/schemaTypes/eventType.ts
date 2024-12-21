import { defineField, defineType } from "sanity";

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string'
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
            name: 'eventType',
            type: 'string'
        }),
        defineField({
            name: 'date',
            type: 'datetime'
        }),
        defineField({
            name: 'doorsOpen',
            //description about the field
            description: 'Number of minutes before the start time for admission',
            type: 'number',
            //set an initial value
            initialValue: 60,
        }),
        defineField({
            name: 'venue',
            type: 'reference',
            to: [{type: 'venue'}]
        }),
        defineField({
            name: 'artist',
            type: 'reference',
            to: [{type: 'artist'}]
        }),
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'details',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'ticket',
            type: 'url'
        })
    ],
    //content list preview
    preview:{
        select: {
            title: 'name',
            subtitle: 'artist.name',
            media: 'image'
        }
    }
})