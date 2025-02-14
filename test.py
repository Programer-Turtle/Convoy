import requests

data = requests.post("http://localhost:3000/login", json={
    "username":"karson",
    "password":"21"
})

print(data.json())