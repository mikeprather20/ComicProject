# What is the project about 
- This project is a fullstack implmentation to reading and display information from comic vine using their api

# Global features/objective
1.  signin and signup

## Frontend features
1. signin/signup page
2. f2

## Backend features
1. signin/up/out routes (3 separate routes)
2. f2

## Assumptions
amanda sign's up
goes to homepage

what does she see?
see a screen with 
search bar at top
list of results below (empty)

when she searches it talks to comic vine (api)
displays seearch results (cards list) below the search bar

card -> image, text on top of images, add to collection button

clicking add to library
list responses, {image, name, volume, issue#}

Models
Users {id}
UserComix {comicId, userId}
Comics {imageUrl, title, subtitle, volume, edition, userId,id}


Routes
searchcomic : get:query -> (comics {query}) -> response (list: comic): filter out items in users collection -> send response to frontend
handle duplicates (a comic returned by the search which is already in a users collection)
usercomic get, get:id, post|add, delete, put|update


search(issues) examples
superman strikes back 2-> []



quick look set up
V
https://lucid.app/lucidchart/3538d285-cfe7-49a7-9538-6e2c08e77a7a/edit?invitationId=inv_69100ffc-58ee-4e67-8019-abbb06285454#



comic vine api call examples
https://comicvine.gamespot.com/api/issues/1-1000000/?api_key=(apikey here)&format=json


https://comicvine.gamespot.com/api/search/?api_key=**my api key here**&format=json&sort=name:dec&resources=issue&query='**searched txt here**'

this is it i beleive
https://comicvine.gamespot.com/api/volumes/?api_key=***key***&format=json&sort=name:dec&filter=name:**searched txt here**