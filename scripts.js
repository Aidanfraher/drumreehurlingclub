// Fetch Latest Tweets
async function fetchTweets() {
    const tweetsContainer = document.getElementById('tweets-list');
    try {
        // Replace with the actual API endpoint for Drumree GAA tweets
        const response = await fetch('https://api.twitter.com/2/tweets?ids=DRUMREE_GAA_ID', {
            headers: {
                'Authorization': 'Bearer YOUR_TWITTER_API_TOKEN',
            },
        });
        const data = await response.json();

        // Render tweets
        data.tweets.forEach(tweet => {
            const li = document.createElement('li');
            li.textContent = tweet.text;
            tweetsContainer.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tweets:', error);
        tweetsContainer.textContent = 'Unable to load tweets.';
    }
}

// Fetch Latest Instagram Posts
async function fetchInstagramPosts() {
    const instagramContainer = document.getElementById('instagram-list');
    try {
        // Replace with the actual API endpoint for Drumree GAA Instagram posts
        const response = await fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=YOUR_INSTAGRAM_ACCESS_TOKEN');
        const data = await response.json();

        // Render Instagram posts
        data.data.forEach(post => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = post.media_url;
            img.alt = post.caption || 'Instagram Post';
            li.appendChild(img);
            instagramContainer.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        instagramContainer.textContent = 'Unable to load Instagram posts.';
    }
}

// Initialize Fetching
document.addEventListener('DOMContentLoaded', () => {
    fetchTweets();
    fetchInstagramPosts();
});
