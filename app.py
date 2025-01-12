import json
from flask import Flask, jsonify

app = Flask(__name__)

# Load data from JSON file
with open("data.json") as f:
    data = json.load(f)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/breweries", methods=["GET"])
def get_breweries():
    return jsonify(data["breweries"])

@app.route("/beers", methods=["GET"])
def get_beers():
    return jsonify(data["beers"])

@app.route("/styles", methods=["GET"])
def get_styles():
    return jsonify(data["styles"])

if __name__ == "__main__":
    app.run(debug=True)
