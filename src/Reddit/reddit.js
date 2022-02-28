export const root = 'https://www.reddit.com';

export const getSubreddits = async () => {
    try {
        const response = await fetch(`${root}/subreddits.json`);
        const json = await response.json();
        return json.data.children.map((subreddit) => subreddit.data);
    } catch(error) {
        console.log(error);
    }
}

