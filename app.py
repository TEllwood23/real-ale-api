import json
from flask import Flask, jsonify, request

app = Flask(__name__)

# Load data from JSON file
with open("data.json") as f:
    data = json.load(f)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/breweries", methods=["GET"])
def get_breweries():
    # Initialize with all breweries
    filtered_breweries = data["breweries"]

    # Apply filters if query parameters are provided
    name = request.args.get('name')
    if name:
        filtered_breweries = [
            brewery for brewery in filtered_breweries
            if brewery['name'].lower() == name.lower()
        ]

    location = request.args.get('location')
    if location:
        filtered_breweries = [
            brewery for brewery in filtered_breweries
            if brewery['location'].lower() == location.lower()
        ]

    county = request.args.get('county')
    if county:
        filtered_breweries = [
            brewery for brewery in filtered_breweries
            if brewery['county'].lower() == county.lower()
        ]

    return jsonify(filtered_breweries)

@app.route("/api/beers", methods=["GET"])
def get_beers():
    return jsonify(data["beers"])

@app.route("/api/styles", methods=["GET"])
def get_styles():
    return jsonify(data["styles"])

if __name__ == "__main__":
    app.run(debug=True)
