import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getSortedPostsData(): PostData[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData: PostData[] = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id and type-cast it to PostData
        return {
            id,
            ...matterResult.data,
        } as PostData;
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type PostData = {
    id: string;
    title: string;
    date: string; // Ensure this matches the format you're using
};