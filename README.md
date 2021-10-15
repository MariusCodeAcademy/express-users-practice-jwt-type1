# books-mysql-async-type1

## install

1. npm i

# Todo

1. Padaryti login mehanizma su grazinamu jwt
1. padaryti front forma loginui ir kad veiktu, issaugodama token
1. padaryti kad prisilogines vartotojas butu prisilogines ir po perkrovimo(localstorage )
1. padaryti user posts page front ir back kad matytume tik to vartotojo postus
1. padatyti bendra posts page kuriame matosi visi postai ir user email
1. hide login and reg if user is logged in
1. Delete button on user posts page
1. index.html show posts of current user in different color/style
1. make single post page to load post details dynamically from qurery params
1. make timeStamp look nice
1. add posts form too add a post
1. add posts form only awailable to logged in user requests verified using jwt

## practice tasks

1. Add ability to add image url and display image on the card
2. Create comments table and connect it to posts. Post can have many comments.
3. In single-post.html add commenting form with 2 inputs, author and text
4. if user is logged in do not show author input and use email
5. modify posts table. add column 'archived' boolean. Default value is false.
   4.1 When we try to delete post, instead of deleting make 'archived' value true
   4.2 in all posts page show only posts that are not 'archived'

## practice more tasks

1. Add different amount of comments to posts
2. Display number of comments in all posts page
3. Add categories table with at least 3 categories
4. create ability to asign category to post for users than own posts
5. in main posts page above posts add categories check boxes and filter
   posts using checkboxes (add 'all' checkbox too)
6. main posts page above posts add sort select box and allow to sort by any column that are displayed. (select column, select ASC or DESC and button to sort)
   sort using query params
7. Add ability to edit post in single post view for a user that is owner of the posts
8. in main post page if user is logged in show button to filter data that own posts
   are first and then all rest.
9. add pagination. ability to show only 3 or 2 posts per page
10. Register page should display error if trying to add email that is already taken
11. Display all error then we get back data with error field similar like we do in login form
12. Refactor code to implement Dry (dont repeat yourself). externalize functions and import them as needed
13. Dynamic main nav links in all pages
14. In main home page check if token is still valid, if not logout user
15. replicate no14 in all pages. try not to dublicate too much
