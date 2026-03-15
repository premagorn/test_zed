from cv_data import CV_DATA
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/cv", methods=["GET"])
def get_cv():
    return jsonify(CV_DATA)


if __name__ == "__main__":
    app.run(debug=True, port=5000)