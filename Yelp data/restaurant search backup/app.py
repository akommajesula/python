from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
#import scrape_craigslist

app = Flask(__name__)

mongo = PyMongo(app)


@app.route("/")
def index():
    #listings = mongo.db.listings.find_one()
    return render_template("index.html")

@app.route("/map")
def map():
    #listings = mongo.db.listings.find_one()
    return render_template("geomap.html")

@app.route("/burst")
def burst():
    #listings = mongo.db.listings.find_one()
    return render_template("fireburst2.html")

@app.route("/flare")
def flare():
    #listings = mongo.db.listings.find_one()
    return render_template("flare.html")

@app.route("/scrape")
def scrape():
    listings = mongo.db.listings
    listings_data = scrape_craigslist.scrape()
    listings.update(
        {},
        listings_data,
        upsert=True
    )
    return redirect("http://localhost:5000/", code=302)


if __name__ == "__main__":
    app.run(debug=True)