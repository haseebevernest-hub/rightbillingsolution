// // import type {StructureResolver} from 'sanity/structure'

// // // https://www.sanity.io/docs/structure-builder-cheat-sheet
// // export const structure: StructureResolver = (S) =>
// //   S.list()
// //     .title('Content')
// //     .items(S.documentTypeListItems())


// import type { StructureResolver } from 'sanity/structure'

// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items([
//       S.documentTypeListItem('blog').title('Blogs'),
//       // S.documentTypeListItem('author').title('Authors'),
//       // S.documentTypeListItem('category').title('Categories'),
//     ])



import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('blog').title('Blogs'),
    ])