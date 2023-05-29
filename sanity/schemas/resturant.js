import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Resturant name',
      type: 'string',
      validation : (Rule) => Rule.required(),
    },
    {
     name : 'short_description',
     type : 'string',
     title : "Short Description",
     validation : (Rule) => Rule.max(200),
    } ,
    {
      name : 'image',
      type : 'image',
      title : 'Image of the resturant',
    },
    {
      name : 'lat',
      type : 'number',
      title : 'Latitude of the resturant',
    },
    {
      name : 'long',
      type : 'number',
      title : 'Longitude of the resturant',
    },
    {
      name : 'address',
      type : 'string',
      title : 'Address of the Resturant',
      validation : (Rule) => Rule.required(),
    },
    {
      name : 'rating',
      type : 'number',
      title : 'Enter Rating from (1-5 Stars)',
      validation : (Rule) => Rule.required().min(1).max(5).error('Please Enter Value between 1 and 5'),
    },
    {
      name : 'type',
      title : 'Category',
      validation : (Rule) => Rule.required(),
      type : 'reference',
      to : [{ type : 'category'}],
    },
    {
      name : 'dishes',
      type : 'array',
      title : 'Dishes',
      of : [{ type : "reference" , to : [{type : 'dish'}]}],
    },
  ]
 
})
