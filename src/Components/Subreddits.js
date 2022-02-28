import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubreddits } from '../Reddit/reddit';
import { addSubreddit, selectSubreddits } from '../Features/subredditsSlice';


export const Subreddits = () => {
    
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);

    useEffect(() => getSubreddits().then(json => {
        json.forEach(item => dispatch(
            addSubreddit({
                name: item.display_name,
                url: item.url,
                id: item.id,
                icon: item.community_icon.split("?")[0],
            })));
    }), [dispatch]);

    
    return (
        <secion>
            <ul>
                {subreddits.map(subreddit => (
                    <li>
                        <img src={subreddit.icon}/>
                        {subreddit.name}
                    </li>
                ))}
            </ul>
        </secion>
    );
}