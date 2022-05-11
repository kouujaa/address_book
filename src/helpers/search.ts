import Fuse from "fuse.js";

/**
 *
 * @param fields // field against which you want to search
 * @param dataSet // array of objects
 * @param searchTerm // search term as string
 * @returns
 */
export const fuzzySearch = (
  fields: string[],
  dataSet: any[],
  searchTerm: string
) => {
  if (!searchTerm) {
    return dataSet;
  }
  console.log({ searchTerm });
  const fuse = new Fuse(dataSet, {
    keys: fields,
  });
  return fuse.search(searchTerm).map((result) => result.item); // TODO: sort by index/weight before returning
};
