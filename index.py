from flask import Flask, render_template,send_from_directory

app = Flask(__name__)

@app.route('/')
def run_game():
    return render_template("index.html")


@app.route('/js/<path:path>') #function defined to serve static files using flask server
def send_js(path):
    return send_from_directory('js', path)

@app.route('/assets/<path:path>') #function defined to serve static files using flask server
def send_assets(path):
    return send_from_directory('assets', path)

if __name__ =='__main__':
	app.run(port = 8080, debug = True)
