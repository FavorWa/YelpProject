from flask import Flask
import requests

api = Flask(__name__)

API_KEY = "nRmQg_NkjRoD-yHp9ojddeo1_rsB2orb--GVMrXU5XdvFBEViAJnsGg_7wrmm2NUWHsIJrRP4915ugzta1177-fZudWwG1V0NdQNoNcBL5Nn4rSLlxeWvHUVt0FsY3Yx"
ENDPOINT = 'https://api.yelp.com/v3/businesses/search'
HEADERS = {'Authorization': 'bearer %s' %API_KEY}

keyword = requests.get('code/frontend/src/App.js/')
PARAMETERS = {
    'term': keyword,
    'limit': 50,
    'radius': 100,
    'location': 'Boston'
}
response = requests.get(url = ENDPOINT,
                        params = PARAMETERS,
                        headers = HEADERS
                        )
business_data = response.json()

f = open('.\\apis\\yelp_results,txt', 'w')
f.write(json.dumps(business_data, indent = 3))
f.close 

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body

@api.route('/results', methods = ["POST"])
def get_result():
    