import React from 'react'

import CategoryCard from "../../components/CategoryCard"

const ListCategory = () => {
       const categories = [{
              id: 1,
              url: `https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80`,
              title: "Forest",
              category: "Forest",
              subtitle: "Lorem ipsum dolor site amet.",
              location: "Nevada USA"
          },
          {
              id: 2,
              url: `https://images.unsplash.com/photo-1481047874621-0ed2ab52598e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
              title: "Waterfall",
              category: "Waterfall",
              subtitle: "Lorem ipsum dolor site amet.",
              location: "Florida USA"
          },
          {
              id: 3,
              url: `https://images.unsplash.com/photo-1639909280895-9c84d26d917e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60`,
              title: "Dessert",
              category: "Dessert",
              subtitle: "Lorem ipsum dolor site amet.",
              location: "Sahara Africa"
          },
          {
              id: 4,
              url: `https://images.unsplash.com/photo-1639760181882-63c4e9d703db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60`,
              title: "Mountain",
              category: "Mountain",
              subtitle: "Lorem ipsum dolor site amet.",
              location: "Australia"
          }
      ]
       return (
              <React.Fragment>
                     <div className="flex flex-col md:flex-row gap-x-6">
                            {
                                   categories.map( items => (
                                          <CategoryCard imageUrl={ items.url } title={ items.title } subtitle={ items.subtitle } category={ items.category } location={ items.location } />
                                   ))
                            }
                     </div>
              </React.Fragment>
       )
}

export default ListCategory
