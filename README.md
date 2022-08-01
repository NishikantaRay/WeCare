# WeCare

```{
	"info": {
		"_postman_id": "f1c007b6-673b-4e71-bf6f-8b9d6daf4e68",
		"name": "wecare",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
	},
	"item": [
		{
			"name": "userRegister",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"Nishikanta Ray\",\r\n    \"email\": \"nishikantaray31@gmail.com\",\r\n    \"phoneNumber\": \"6372833268\",\r\n    \"password\": \"ray@12345\",\r\n    \"api_key\": \"registeruser\",\r\n    \"dateofbirth\": \"09/12/2001\",\r\n    \"gender\":\"male\",\r\n    \"pincode\":\"759001\",\r\n    \"city\":\"dkl\",\r\n    \"country\":\"india\",\r\n    \"state\":\"odisha\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/users/user/userRegister"
			},
			"response": []
		},
		{
			"name": "coachRegister",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"Nishikanta Ray\",\r\n    \"phoneNumber\": \"6372833986\",\r\n    \"password\": \"ray@12345\",\r\n    \"api_key\": \"registeruser\",\r\n    \"dateofbirth\": \"09/12/2001\",\r\n    \"gender\":\"male\",\r\n    \"speciality\":\"gfffk\"\r\n    \r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/users/user/coachRegister"
			},
			"response": []
		},
		{
			"name": "userLogin",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"userid\":\"U0\",\r\n    \"password\": \"ray@12345\",\r\n    \"api_key\": \"registeruser\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/users/user/userLogin"
			},
			"response": []
		},
		{
			"name": "coachLogin",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"coachid\":\"C0\",\r\n    \"password\": \"ray@12345\",\r\n    \"api_key\": \"registeruser\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/users/user/coachLogin"
			},
			"response": []
		},
		{
			"name": "userDetailsbyuserid",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"userid\":\"U0\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/users/user/userDetailsbyuserid"
			},
			"response": []
		},
		{
			"name": "userDetails",
			"request": {
				"method": "POST",
				"header": [],
				"url": "http://localhost:4031/api/v1/users/user/userDetails"
			},
			"response": []
		},
		{
			"name": "coachDetailsbycoachid",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"coachid\":\"C1\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/users/user/coachDetailsbycoachid"
			},
			"response": []
		},
		{
			"name": "coachDetails",
			"request": {
				"method": "POST",
				"header": [],
				"url": "http://localhost:4031/api/v1/users/user/coachDetails"
			},
			"response": []
		},
		{
			"name": "addBooking",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"userid\":\"user1000\",\r\n    \"coachid\":\"coach1000\",\r\n    \"date\": \"09-12-2001\",\r\n    \"slot\": \"2222ffd7\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/book/bookings/addBooking"
			},
			"response": []
		},
		{
			"name": "updateBooking",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"bookingid\":\"booking1000\",\r\n    \"date\": \"10-12-2001\",\r\n    \"slot\": \"2222ffd7\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/book/bookings/updateBooking"
			},
			"response": []
		},
		{
			"name": "getBookingByCoachId",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"coachid\":\"coach1000\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/book/bookings/getBookingByCoachId"
			},
			"response": []
		},
		{
			"name": "getbooking",
			"request": {
				"method": "POST",
				"header": [],
				"url": "http://localhost:4031/api/v1/book/bookings/getBooking"
			},
			"response": []
		},
		{
			"name": "getBookingByUserId",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"userid\":\"user1000\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/book/bookings/getBookingByUserId"
			},
			"response": []
		},
		{
			"name": "deleteBooking",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"bookingid\":\"booking1000\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:4031/api/v1/book/bookings/deleteBooking"
			},
			"response": []
		}
	]
}
```
