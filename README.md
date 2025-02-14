# Real Ale API

## Overview
The Real Ale API provides access to detailed information about breweries, beers, and beer styles and filter them based on different attributes. This API is built using **Python** and **Flask**.

## Technologies Used
- **Backend**: Python, Flask
- **Frontend**: React
- **Database**: Will be updated with PostgreSQL
- **Hosting**: AWS Amplify (for frontend), AWS Elastic Beanstalk (for backend) - (Will be deployed soon)

## Features
- API responses regarding beers, breweries, and real ale types available in JSON format.
- Search functionality coming soon.

## API Endpoints

### 1. **Get All Breweries**
**GET** /api/breweries

Returns a list of all breweries. Filter by name, location, or county.

### 2. **Get Brewery by ID**
**GET** /api/breweries/{brewery_id}

Returns details of a specific brewery by its ID.

### 3. **Get All Beers**
**GET** /api/beers

Returns a list of all beers. Filter by name, style, ABV, and more.

### 4. **Get Beer by ID**
**GET** /api/beers/{beer_id}

Returns details of a specific beer by its ID.

### 5. **Get All Beer Styles**
**GET** /api/styles

Returns a list of all beer styles.
