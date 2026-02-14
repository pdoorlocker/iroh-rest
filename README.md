🍵 Iroh.REST (The Jasmine Dragon API)
"It is important to draw wisdom from many different places." — Uncle Iroh

Iroh.REST is a free, open-source REST API that provides random wisdom from the Dragon of the West, Uncle Iroh. Heavily inspired by the legendary kanye.rest.

🚀 Usage
No API key is required. Just send a GET request to receive wisdom.

Endpoint
HTTP
GET /api
Response
The API returns a JSON object with a single quote field.

```JSON
{
  "quote": "Pride is not the opposite of shame, but its source. True humility is the only antidote to shame."
}
```

🛠 Code Examples
Here is how you can use Iroh's wisdom in your own applications.

JavaScript (Fetch)
```JavaScript
fetch('https://iroh-rest.vercel.app/api')
    .then(response => response.json())
    .then(data => {
        console.log(data.quote);
    });
```
Python
```Python
import requests

response = requests.get('https://iroh-rest.vercel.app/api')
print(response.json()['quote'])
```
cURL
```Bash
curl https://iroh-rest.vercel.app/api
```
☕ Contributing
"While it is always best to believe in oneself, a little help from others can be a great blessing."

If you notice a missing quote or a typo, feel free to open a Pull Request or submit an issue.

📜 License
This project is for educational and entertainment purposes. All quotes belong to the creators of Avatar: The Last Airbender.
