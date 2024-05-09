export interface Articles {
        source: {
            id: string | null,
            name: string,
          },
          author: string,
          title: string,
          description: string,
          url: string,
          urlToImage: string,
          publishedAt: string,
          content: string,
          liked?: boolean,
   
    }

// export interface ExtendedArticles extends Articles {
//     liked: boolean
// }