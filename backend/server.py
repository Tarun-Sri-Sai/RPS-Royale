from flask import Flask, jsonify, send_file
from flask_cors import CORS
from os.path import join


app = Flask(__name__)
CORS(app)


@app.route('/get-png/<string:png_name>', methods=['GET'])
def fetch_google_drive(png_name: str):
    png_paths = {
        x.lower(): join('assets', f'{x}.png') for x in ['Rock', 'Paper', 'Scissors']
    }
    return send_file(png_paths[png_name], mimetype='image/png')


if __name__ == '__main__':
    app.run(debug=True)
