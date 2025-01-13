import json
from flask import Flask, jsonify, request

app = Flask(__name__)

# Load data from JSON file
with open("data.json") as f:
    data = json.load(f)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

def find_by_id(data_list, id):
    return next((item for item in data_list if item["id"] == id), None)

@app.route("/api/breweries/<string:brewery_id>", methods=["GET"])
def get_brewery_by_id(brewery_id):
    brewery = find_by_id(data["breweries"], brewery_id)
    if not brewery:
        return jsonify({"error": "Brewery not found"}), 404
    return jsonify(brewery)

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

@app.route("/api/beers/<string:id>", methods=["GET"])
def get_beer_by_id(id):
    beer = find_by_id(data["beers"], id)
    if not beer:
        return jsonify({"error": "Beer not found, try another id"}), 404
    return jsonify(beer)

@app.route("/api/beers", methods=["GET"])
def get_beers():
    style = request.args.get('style')
    abv_min = request.args.get('abv_min')
    abv_max = request.args.get('abv_max')
    brewery_id = request.args.get('brewery_id')

    # Start with all beers
    filtered_beers = data["beers"]

    # Filter by style
    if style:
        filtered_beers = [
            beer for beer in filtered_beers
            if beer["style"].lower() == style.lower()
        ]

    # Filter by ABV range
    if abv_min or abv_max:
        def abv_in_range(beer):
            abv = float(beer["abv"].strip('%'))
            return (not abv_min or abv >= float(abv_min)) and (not abv_max or abv <= float(abv_max))

        filtered_beers = [beer for beer in filtered_beers if abv_in_range(beer)]

    # Filter by brewery ID
    if brewery_id:
        filtered_beers = [
            beer for beer in filtered_beers
            if beer["brewery_id"] == brewery_id
        ]

    return jsonify(filtered_beers)

@app.route("/api/styles", methods=["GET"])
def get_styles():
    return jsonify(data["styles"])

if __name__ == "__main__":
    app.run(debug=True)
