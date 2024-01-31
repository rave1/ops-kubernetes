from flask import Flask, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, origins='*')
logging.getLogger('flask_cors').level = logging.DEBUG

@app.route("/")
def hello_world():
    return jsonify(
        {"status": "working"}
    )

if __name__ == '__main__':
    app.run(debug=True)