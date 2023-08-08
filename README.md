# its-ian-site
My personal website.


I don't want this to *just* be a personal site. I want to use this site to showcase my skills in full-stack development (and maybe AWS).
This site will mainly serve as an introduction to me, as I don't have any other projects to showcase yet. I also want to add a couple of
fun features to my site, but that'll come after I actually make it.

As I write this before I've gotten any work done, here's the current plan: design a single page website for introducing myself.

-1. Initialize the Github repo (Done!)
0.  Build the initial REACT application and push to repo so that I can start work.
1.  Design the layout of my site and decide what information it'll contain.
2.  Build the components needed to satisfy the design I come up with.
3.  Slap the components onto my page and finish building the first iteration of my site.

Since I want this site to showcase my full-stack skills I need a backend as well, so here's my idea: a functioning comments section!
I want anyone who visits my site to be able to leave a comment and have the comment remain forever. I won't go in-depth on this here
because this will involve making another repo anyway, so 

4.  Create another component for the comments.
5.  Build an API that will allow the site to make GET calls to a database.
6.  Initialize the database and create schemas and endpoints for it in the API.
7.  Implement API call functionality to website and have it fill the comment component.

I haven't fully decided how I'm going to host the site yet, but I'm leaning towards hosting it on AWS because I plan on pursuing an
AWS Solutions Architect certification along with developing this site. My main concern with this method is cost. I'm kinda tight on cash
at the moment and I'm not sure if I'll be able to afford hosting on AWS for an extended period of time. If I do go through with it, I'll 
store the contents of the site in an S3 and utilize Cloudfront since this will be a static site. I might even use DocumentDB for the database.

The tech stack for this project will utilize the following: (list will be updated as new stuff is added or plans change)

- REACT
- Python
