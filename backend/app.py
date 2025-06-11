from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
from embedding_utlils import get_bert_embedding
import numpy as np

app = Flask(__name__)
CORS(app)  

model = joblib.load("logistic_model_fake_review.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get("review")
    if not text:
        return jsonify({"error": "No review provided"}), 400

    emb = get_bert_embedding(text).reshape(1, -1)
    pred = model.predict(emb)[0]
    return jsonify({"prediction": int(pred)})

if __name__ == "__main__":
    app.run(debug=True)
