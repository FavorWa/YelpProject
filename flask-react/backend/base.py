from flask import Flask, request,jsonify
import requests

app = Flask(__name__)

@app.route('/', methods=["POST"])
def search_yelp():
  # Get the user's input from the request parameters
  location = request.json.get("location")
  term = request.json.get("term")

  # Use the requests library to make a request to the Yelp API
  yelp_api_key = "8-K6C2zdxaYZ-SOxTCXSZtSXiQs2DkamO_aNjOcAvwJQan0rtCK7cJDZIkjUFtPizTKHlsz9ojSpWxh5aF3Ys0B51JtY0Q8hzzaPp0oJfTu21axXhTrvVawoYcl3Y3Yx"    
  headers = {'Authorization': f'Bearer {yelp_api_key}'}
  params = { 'term':term ,'location':location}
  response = requests.get('https://api.yelp.com/v3/businesses/search', headers=headers, params=params)

  # Return the response from the Yelp API as a JSON object
  return jsonify(response.json())

if __name__ == '__main__':
  app.run()


