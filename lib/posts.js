import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get filenames under the posts directory.
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove the extensions from the markdown files.
    const id = fileName.replace(/\.md$/, '');

    // Read the contents of the markdown file and save them as a string.
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Call grey-matter to parse the posts metadata section.
    const matterResult = matter(fileContents);

    // Combine the result with the id.
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort the posts by date.
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse the meta-data section using gray-matter.
  const matterResult = matter(fileContents);

  // Combine the data with the id.
  return {
    id,
    ...matterResult.data,
  };
}
