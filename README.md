# Bucket List API

## Base URL: https://bw-pt-bucket-list.herokuapp.com/

---

##Endpoints

### GET /api/users

    -header:
    		-Authorization : USER_TOKEN

    -returns all users
    	*example:
    		  {
    			  "users": [
    			    {
    			      "id": 1,
    			      "name": "Test User",
    			      "email": "test@test.com",
    			      "created": "2019-06-28T15:52:58.768Z"
    			    },
    			    {
    			      "id": 2,
    			      "name": "Test User 2",
    			      "email": "test2@test.com",
    			      "created": "2019-06-28T15:52:58.768Z"
    			    }
    			  ]
    			}

### GET /api/user

    -header:
    		-Authorization : USER_TOKEN -Required

    -returns the user currently logged in
    	*example:
    		  {

"user": {
"id": 42,
"name": "Testy McTestFace",
"email": "testy@mctestface.com",
"created": "2019-08-15T17:26:45.990Z"
}
}

### GET /api/user/:user_id

    	-header:
    		-Authorization : USER_TOKEN -Required

    	-returns a user by id
    		*example:
    		  {

"user": {
"id": 42,
"name": "Testy McTestFace",
"email": "testy@mctestface.com",
"created": "2019-08-15T17:26:45.990Z"
}
}

### GET /api/user/:user_id/items

    -header:
    		-Authorization : USER_TOKEN -Required


    -returns all bucket list items for user_id
    	*example:
    		{
    		  "items": [
    		    {
    		      "id": 14,
    		      "user_id": 3,
    		      "completed": false,
    		      "description": "testing",
    		      "created": "2019-07-22T18:22:41.317Z"
    		    }
    		  ]
    		}

### GET /api/user/friends

    -header:
    	-Authorization : USER_TOKEN -Required


    -returns logged in users friends

### GET /api/item/:item_id

    -header:
    	-Authorization : USER_TOKEN -Required


    -returns bucket list item by id
    	*example:
    		{
    		  "item": {
    		    "id": 1,
    		    "user_id": 1,
    		    "completed": false,
    		    "description": "Drive a Ferrari",
    		    "created": "2019-06-28T15:52:58.870Z"
    		  }
    		}

### GET /api/item/:item_id/posts

    -header:
    	-Authorization : USER_TOKEN -Required

    -returns all posts for item_id
    	*example:
    		{
    		  "posts": [
    		    {
    		      "id": 1,
    		      "item_id": 1,
    		      "message": "I did not drive one",
    		      "created": "2019-06-28T15:52:58.978Z"
    		    },
    		    {
    		      "id": 2,
    		      "item_id": 1,
    		      "message": "They are too damn expensive",
    		      "created": "2019-06-28T15:52:58.978Z"
    		    }
    		  ]
    		}

### GET /api/item/post/:post_id

    -header:
    	-Authorization : USER_TOKEN -Required

    -returns a post by id
    	*example:
    		{
    		  "post": {
    		    "id": 1,
    		    "item_id": 1,
    		    "message": "I did not drive one",
    		    "created": "2019-06-28T15:52:58.978Z"
    		  }
    		}

### GET /api/item/post/:post_id/images

    -header:
    	-Authorization : USER_TOKEN -Required

    -returns an array of all images for post_id
    	*example:
    		{
    		  "images": [
    		    {
    		      "id": 1,
    		      "post_id": 3,
    		      "url": "https://1bo9y82e76el2rf8ms1m5i0r-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/NaPaliRiders_Hcom_slider_v2.jpg",
    		      "created": "2019-06-28T15:52:59.077Z"
    		    }
    		  ]
    		}

### GET /api/item/post/image/:image_id

    -header:
    	-Authorization : USER_TOKEN -Required

    -returns image by id
    	*example:
    		{
    		  "image": {
    		    "id": 2,
    		    "post_id": 15,
    		    "url": "",
    		    "created": "2019-07-30T23:56:20.718Z"
    		  }
    		}

### GET /api/item/post/:post_id/videos

    -header:
    	-Authorization : USER_TOKEN -Required

    -returns an array of all videos for post_id
    	*example:
    		{
    		  "videos": [
    		    {
    		      "id": 1,
    		      "post_id": 3,
    		      "video": "https://1bo9y82e76el2rf8ms1m5i0r-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/NaPaliRiders_Hcom_slider_v2.jpg",
    		      "created": "2019-06-28T15:52:59.077Z"
    		    }
    		  ]
    		}

### GET /api/item/post/video/:video_id

    -header:
    	-Authorization : USER_TOKEN -Required

    -returns image by id
    	*example:
    		{
    		  "video": {
    		    "id": 2,
    		    "post_id": 15,
    		    "video": "",
    		    "created": "2019-07-30T23:56:20.718Z"
    		  }
    		}

### GET /api/item/post/:post_id/voices

    -header:
    	-Authorization : USER_TOKEN -Required

    -returns an array of all voice memos for post_id
    	*example:
    		{
    		  "voice_memo": [
    		    {
    		      "id": 1,
    		      "post_id": 3,
    		      "voice_memo": "https://1bo9y82e76el2rf8ms1m5i0r-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/NaPaliRiders_Hcom_slider_v2.jpg",
    		      "created": "2019-06-28T15:52:59.077Z"
    		    }
    		  ]
    		}

### GET /api/item/post/voice/:voice_memo_id

    -header:
    	-Authorization : USER_TOKEN -Required

    -returns image by id
    	*example:
    		{
    		  "image": {
    		    "id": 2,
    		    "post_id": 15,
    		    "voice_memo": "",
    		    "created": "2019-07-30T23:56:20.718Z"
    		  }
    		}

### POST /api/register

    -header:
    	 -Content-Type : application/json -Required
    	 -Authorization : USER_TOKEN -Required


    -body:
        -name -Required
        -email -Required
        -password -Required

    *example

    		{
    			"name": "Testy McTestFace",
    			"email": "testy@mctestface.com",
    			"password": "password"
    		}

    -returns { message: "User created", token: "USER_TOKEN" }

### POST /api/login

     -header:
    	 -Content-Type : application/json -Required
    	 -Authorization : USER_TOKEN -Required

    -body:
        -email -Required
        -password -Required

    	*example

        		{
    				"email": "testy@mctestface.com",
    				"password": "password"
    			}

    -returns { message: "Logged in", token: "USER_TOKEN" }

### POST /api/item

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required


    -body:
        -user_id -Required
        -completed -Optional, default is false
        -description -Required

    	*example

        		{
    				"user_id": 10,
    				"completed": false
    				"description": "Swim in Scrooge McDuck's Money Vault"
    			}


    -returns id of new item
    	*returns {"error":"(intermediate value) is not iterable"} even though POST is successful.

### POST /api/item/post

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required


    -body:
        -item_id -Required
        -message -Required

    	*example

        		{
    				"item_id": 32,
    				"message": "hey look at me I am a message!"
    			}


    -returns id of new post
    	*returns {"error":"(intermediate value) is not iterable"} even though POST is successful.

### POST /api/item/post/image

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -post_id -Required
        -photo

    	*example

        		{
    				"post_id": 17,
    				"photo": "_URL_TO_STORE_IMAGE_"
    			}


    photo is required.

    -returns id of new image

### POST /api/item/post/video

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -post_id -Required
        -video

    	*example

        		{
    				"post_id": 17,
    				"video": "_URL_TO_STORE_VIDEO_"
    			}


    video is required.

    -returns id of new video

### POST /api/item/post/voice

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -post_id -Required
        -voice_memo

    	*example

        		{
    				"post_id": 17,
    				"voice_memo": "_URL_TO_STORE_VOICE_MEMO_"
    			}


    voice_memo is required.

    -returns id of new voice_memo

### POST /api/user/friends/:friend_id

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    Creates a friendship with friend having friend_id (friend_id is the user_id of the person you want to create a friendship with.)

    -returns { message: Friendship created }

### PUT /api/item/:item_id

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -completed -Optional, default is false
        -description -Required

    	*example

        		{
    				"completed": true,
    				"description": "Going bungy jumping with the Dalai Lama was sooo amazing!"
    			}


     -returns id of updated item

    	*example:
    		{
    		  "id": 1
    		}

### PUT /api/item/post/:post_id

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -item_id -Required
        -message -Required

    	*example

        		{
    				"item_id": 32,
    				"message": "Hey, I updated your stupid message dude..."
    			}


    -returns id of updated post

    	*example:

        		{
    			  "id": 1
    			}

### PUT /api/item/post/image/:image_id

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -post_id -Required
        -image
        -url

    	*example

        		{
    				"post_id": 17,
    				"image": null,
    				"url": "_UPDATED_URL_"
    			}


    -returns id of updated image

    	*example:

        		{
    			  "id": 1
    			}

### PUT /api/item/post/video/:video_id

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -post_id -Required
        -video

    	*example

        		{
    				"post_id": 17,
    				"video": "_UPDATED_VIDEO_"
    			}


    -returns id of updated video

    	*example:

        		{
    			  "id": 1
    			}

### PUT /api/item/post/voice/:voice_memo_id

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -post_id -Required
        -voice_memo

    	*example

        		{
    				"post_id": 17,
    				"image": null,
    				"voice_memo": "_UPDATED_VOICE_MEMO_"
    			}


    -returns id of updated image

    	*example:

        		{
    			  "id": 1
    			}

### DELETE /api/item/:item_id

    -header:
    		-Authorization : USER_TOKEN -Required

    -deletes an item by id and returns { message: "deleted id id# " }
    	*example:
    		{
    		  "message": "deleted id 33"
    		}

### DELETE /api/item/post/:post_id

    -header:
    		-Authorization : USER_TOKEN -Required

    -deletes an post by id and returns { message: "deleted id id# " }
    	*example:
    		{
    		  "message": "deleted id 17"
    		}

### DELETE /api/item/post/image/:image_id

    -header:
    		-Authorization : USER_TOKEN -Required

    -deletes an image by id and returns { message: "deleted id id# " }
    	*example:
    		{
    		  "message": "deleted id 3"
    		}

### DELETE /api/item/post/video/:video_id

    -header:
    		-Authorization : USER_TOKEN -Required

    -deletes video by id and returns { message: "deleted id id# " }
    	*example:
    		{
    		  "message": "deleted id 3"
    		}

### DELETE /api/item/post/voice/:voice_memo_id

    -header:
    		-Authorization : USER_TOKEN -Required

    -deletes voice memo by id and returns { message: "deleted id id# " }
    	*example:
    		{
    		  "message": "deleted id 3"
    		}

### DELETE /api/user/friends/:friend_id

    -header:
    		-Authorization : USER_TOKEN -Required

    -deletes a friendship for friend_id and returns { message: "Unfriended " }
    	*example:
    		{
    		  "message": "Unfriended"
    		}

---

##Contact Endpoints

### GET /api/contacts

    -header:
    		-Authorization : USER_TOKEN -Required

    -returns an array of all contacts

    	*example

        		{
    			  "contacts": [
    			    {
    			      "id": 1,
    			      "firstname": "Test",
    			      "lastname": "test",
    			      "email": "test@test.com"
    			    }
    			  ]
    			}

### GET /api/contacts/:id/messages

    -header:
    		-Authorization : USER_TOKEN -Required

    -returns an array of all messages for a contact

    	*example

        		{
    			  "contacts": [
    			    {
    			      "id": 1,
    			      "firstname": "Test",
    			      "lastname": "test",
    			      "email": "test@test.com"
    			    }
    			  ]
    			}

### POST /api/contacts

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -firstname -Required
        -lastname  -Required
        -email     -Required

    	*example

        		{
    				"firstname": "Zaboom",
    				"lastname": "Afoo",
    				"email": "zaboom@afoo.com"
    			}


    -returns id of new contact

    	*example

    			{
    			  "message": "Contact added",
    			  "id": 2
    			}

### POST /api/contacts/:contact_id/messages

    -header:
    		-Content-Type : application/json -Required
    		-Authorization : USER_TOKEN -Required

    -body:
        -message    -Required

    	*example

        		{
    				"message": "I'm a new message!"
    			}


    -returns id of new message

    	*example

        		{
    			  "message": "Message added",
    			  "id": 5
    			}

### DELETE /api/contacts/:id

    -header:
    		-Authorization : USER_TOKEN -Required

    -deletes a contact by id
    	*example:
    		{
    		  "message": "Contact Deleted"
    		}
