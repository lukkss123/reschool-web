async function getAlbumPhotos(albumId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    const photos = await response.json();

    console.log(` ალბომში არის ${photos.length} ფოტო`);

    // პირველი 5 ფოტოს სათაურები
    console.log("პირველი 5 ფოტოს სათაურები:");
    photos.slice(0, 5).forEach((photo, index) => {
      console.log(`${index + 1}. ${photo.title}`);
    });
  } catch (error) {
    console.error("შეცდომა ფოტოებში:", error);
  }
}

// მაგალითი გამოძახების:
getAlbumPhotos(1);


async function getUserCompleteInfo(userId) {
  try {
    // მომხმარებლის ინფორმაცია
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();

    console.log(" მომხმარებლის ინფორმაცია:");
    console.log(`სახელი: ${user.name}`);
    console.log(`მომხმარებლის სახელი: ${user.username}`);
    console.log(`ელფოსტა: ${user.email}`);
    console.log(`ქალაქი: ${user.address.city}`);
    console.log(`კომპანია: ${user.company.name}`);

    // მომხმარებლის პოსტები
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await postsResponse.json();

    console.log(`\n მომხმარებელს აქვს ${posts.length} პოსტი`);
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });

    // პირველი პოსტის კომენტარები
    if (posts.length > 0) {
      const firstPostId = posts[0].id;
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${firstPostId}/comments`);
      const comments = await commentsResponse.json();

      console.log(`\n პირველი პოსტის კომენტარები (${comments.length}):`);
      comments.forEach((comment, index) => {
        console.log(`${index + 1}. ${comment.name} - ${comment.email}`);
      });
    } else {
      console.log("\n მომხმარებელს პოსტები არ აქვს.");
    }

  } catch (error) {
    console.error("შეცდომა მომხმარებლის მონაცემებში:", error);
  }
}

// მაგალითი გამოძახების:
getUserCompleteInfo(1);
