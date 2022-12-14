from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/projects/")
def project():
    x = ""
    for i in os.listdir( os.getcwd() + "\\templates\\projects\\"):
        list = i.split(".html")
        x = x + """
        """ + list[0]
    return x

@app.route("/projects/<name>")
def projects(name):
    return render_template("/projects/" + name + ".html")

if __name__ == "__main__":
    app.run()  